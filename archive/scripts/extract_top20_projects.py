#!/usr/bin/env python3
"""
Read `shamiquekhan_projects_inventory.xlsx` and write top 20 projects to `projects_top20.json`.
Selection logic: choose a numeric ranking column if present, otherwise take first 20 rows.
"""
from pathlib import Path
import json
import sys

try:
    import pandas as pd
except Exception:
    print("pandas not installed. Please run: pip install pandas openpyxl", file=sys.stderr)
    raise

file = Path("shamiquekhan_projects_inventory.xlsx")
if not file.exists():
    print(f"File not found: {file.resolve()}", file=sys.stderr)
    sys.exit(1)

df = pd.read_excel(file)

# Backup original Excel before making changes
backup = file.with_name(file.stem + '_backup' + file.suffix)
if not backup.exists():
    file.replace(backup)
    # restore original path by copying backup back
    import shutil
    shutil.copy(backup, file)
    df = pd.read_excel(file)

candidates = ['Score','Rating','Likes','Stars','Popularity','Rank','Votes','Views']
sort_col = None
ascending = False
for c in candidates:
    if c in df.columns:
        sort_col = c
        # if column name suggests rank, smaller is better
        ascending = True if c.lower() in ('rank',) else False
        break

# Heuristic: normalize numeric columns and add bonuses for image/link/description
numeric_cols = [c for c in candidates if c in df.columns and pd.api.types.is_numeric_dtype(df[c])]

def normalize(series):
    if series.max() == series.min():
        return series.fillna(0).astype(float)
    return (series.fillna(0) - series.min()) / (series.max() - series.min())

score_series = pd.Series(0, index=df.index, dtype=float)
for c in numeric_cols:
    s = df[c]
    # if column is 'Rank', lower is better -> invert after normalization
    norm = normalize(s)
    if c.lower() == 'rank':
        norm = 1 - norm
    score_series += norm

# Bonuses
has_image = df.columns.str.contains('image', case=False) | df.columns.str.contains('photo', case=False)
img_col = None
for col in df.columns:
    if 'image' in col.lower() or 'photo' in col.lower() or 'img' in col.lower():
        img_col = col
        break
has_img = df[img_col].notnull() if img_col is not None else pd.Series(False, index=df.index)
score_series += has_img.astype(float) * 0.2

# link/repo column
link_col = None
for col in df.columns:
    if any(k in col.lower() for k in ('repo', 'url', 'link', 'github')):
        link_col = col
        break
has_link = df[link_col].notnull() if link_col is not None else pd.Series(False, index=df.index)
score_series += has_link.astype(float) * 0.2

# description presence
desc_col = None
for col in df.columns:
    if any(k in col.lower() for k in ('description', 'summary', 'abstract')):
        desc_col = col
        break
has_desc = df[desc_col].notnull() if desc_col is not None else pd.Series(False, index=df.index)
score_series += has_desc.astype(float) * 0.1

# tech stack presence
tech_col = None
for col in df.columns:
    if 'tech' in col.lower() or 'stack' in col.lower() or 'language' in col.lower():
        tech_col = col
        break
has_tech = df[tech_col].notnull() if tech_col is not None else pd.Series(False, index=df.index)
score_series += has_tech.astype(float) * 0.1

# Attach computed score
df['_computed_score'] = score_series

# Identify placeholder rows to remove (Untitled projects or generic placeholders)
title_candidates = [c for c in df.columns if any(k in c.lower() for k in ('title', 'name', 'project'))]
title_col = title_candidates[0] if title_candidates else None
def is_placeholder_row(row):
    title = ''
    if title_col:
        title = str(row.get(title_col, '')).strip()
    desc = ''
    if desc_col:
        desc = str(row.get(desc_col, '')).strip()
    if not title or 'untitled' in title.lower() or title.lower().startswith('project') and ('untitled' in desc.lower() or desc.lower().startswith('untitled')):
        return True
    if title.lower().startswith('untitled'):
        return True
    # detect very short titles with generic repo notes
    if title.lower().startswith('project') and (desc == '' or 'repository listed' in desc.lower()):
        return True
    return False

placeholders = df.apply(is_placeholder_row, axis=1)
removed_count = int(placeholders.sum())
if removed_count > 0:
    # remove placeholder rows
    df_clean = df[~placeholders].copy()
else:
    df_clean = df.copy()

# If we removed rows, append template rows to the Excel to replace them with better entries
if removed_count > 0:
    templates = []
    for i in range(removed_count):
        templates.append({
            title_col or 'Title': f'[Add project title] ({i+1})',
            desc_col or 'Description': 'Please add project description, tech stack, repo link, and LOC if available.',
            'Suggestion': 'Suggested: add repo URL, tech stack, main language, lines_of_code'
        })
    df_templates = pd.DataFrame(templates)
    # Ensure template columns align
    df_clean = pd.concat([df_clean, df_templates], ignore_index=True, sort=False)

df_sorted = df_clean.sort_values(by='_computed_score', ascending=False) if '_computed_score' in df_clean.columns else df_clean

top20 = df_sorted.head(20)
# Convert to records, coerce NaN to None
records = top20.where(pd.notnull(top20), None).to_dict(orient='records')

out = Path('projects_top20.json')
with out.open('w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=2)

# Save cleaned Excel back (overwrite original)
try:
    df_clean.to_excel(file, index=False)
    print(f"Updated Excel saved: {file.resolve()}")
except Exception as e:
    print(f"Could not save updated Excel: {e}", file=sys.stderr)

print(f"Wrote {len(records)} projects to {out.resolve()}")
