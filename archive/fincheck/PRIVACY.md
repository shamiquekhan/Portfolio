# FinCheck Privacy Policy

**Last Updated: December 19, 2025**

## Introduction

FinCheck ("we", "our", "us") is committed to protecting your privacy. This Chrome extension helps detect financial scams and verify content credibility without collecting or storing your personal information.

## Data Collection

### What We DO NOT Collect

- ❌ Personal identification information
- ❌ Browsing history
- ❌ User credentials or passwords
- ❌ Financial account information
- ❌ Location data
- ❌ Device identifiers
- ❌ Analytics or tracking data

### What We Process (Temporarily)

When you use FinCheck to analyze a webpage:

1. **Page Content**: The text content of the webpage you're viewing is sent to our analysis server
2. **Page URL**: The URL is used to determine the type of content being analyzed
3. **Processing**: Content is analyzed for scam indicators and then immediately discarded
4. **No Storage**: We do NOT store any page content, URLs, or analysis results

### Local Storage (On Your Device)

FinCheck stores the following data **only on your device** using Chrome's local storage:

- Extension settings (auto-analyze, notification preferences)
- Usage statistics (pages checked, scams detected)
- Cached analysis results (for performance)

This data:
- Never leaves your device
- Can be cleared by uninstalling the extension
- Is not accessible to us or third parties

## Third-Party Services

### API Services We Use

#### 1. Hugging Face (ML Models)
- **Purpose**: Natural language processing and sentiment analysis
- **Data Shared**: Text content from analyzed pages
- **Privacy Policy**: https://huggingface.co/privacy
- **Data Retention**: Not stored by default (inference API)

#### 2. NewsAPI (Optional)
- **Purpose**: Fetch financial news for context
- **Data Shared**: Search queries only
- **Privacy Policy**: https://newsapi.org/privacy
- **Usage**: Only when news features are enabled

#### 3. Alpha Vantage (Optional)
- **Purpose**: Stock price verification
- **Data Shared**: Stock ticker symbols only
- **Privacy Policy**: https://www.alphavantage.co/privacy/
- **Usage**: Only when stock verification is requested

### Self-Hosted Option

For maximum privacy, you can:
- Run the backend server locally (localhost)
- Use completely offline ML models
- Disable all third-party API integrations

## Permissions Explained

### Chrome Extension Permissions

**activeTab**
- **Purpose**: Access the current webpage when you click the extension icon
- **Usage**: Read page content for analysis
- **Limitation**: Only when you explicitly click the FinCheck icon

**storage**
- **Purpose**: Save your settings and statistics locally
- **Usage**: Store preferences on your device
- **Limitation**: Local only, never synced to cloud

**scripting**
- **Purpose**: Extract content from webpages
- **Usage**: Analyze financial content on pages
- **Limitation**: Only on pages you explicitly analyze

**tabs**
- **Purpose**: Identify which tab you're analyzing
- **Usage**: Get page URL and title
- **Limitation**: No access to other tabs

### Host Permissions

Access to specific websites:
- youtube.com - Detect scams in finance videos
- twitter.com - Analyze financial tweets
- reddit.com - Check investment discussions
- telegram.org - Monitor financial groups

**Note**: We only access these sites when you visit them and use FinCheck.

## Data Security

### How We Protect Your Data

1. **HTTPS Only**: All API communications use encrypted HTTPS
2. **No Persistent Storage**: Analysis results are not saved on servers
3. **Minimal Data Transfer**: Only necessary text is sent for analysis
4. **Open Source**: Full source code available for audit on GitHub
5. **No Tracking**: No cookies, fingerprinting, or analytics

### Your Control

You can:
- ✅ Disable auto-analysis in settings
- ✅ Use the extension only when needed
- ✅ Run completely offline (local server only)
- ✅ Uninstall at any time to remove all data

## Children's Privacy

FinCheck is intended for adults interested in financial content. We do not knowingly collect data from anyone under 18 years of age.

## Changes to Privacy Policy

We may update this privacy policy from time to time. Changes will be posted:
- On our GitHub repository
- In the Chrome Web Store listing
- In the extension update notes

## Open Source Transparency

FinCheck is fully open source:
- **Source Code**: https://github.com/yourusername/fincheck
- **Audit the Code**: Review exactly what data we access
- **Contribute**: Suggest privacy improvements via GitHub issues

## Your Rights

Depending on your location, you may have rights under:
- **GDPR** (EU): Right to access, delete, and port your data
- **CCPA** (California): Right to know and delete your information
- **Other**: Various data protection laws

Since we don't collect or store personal data, most rights are satisfied by default.

### Data Deletion

To delete all FinCheck data:
1. Uninstall the Chrome extension
2. Clear Chrome local storage for the extension
3. Contact us to confirm no data is retained (there won't be any)

## Contact Us

Questions about this privacy policy or data practices?

- **Email**: privacy@fincheck.com
- **GitHub Issues**: https://github.com/yourusername/fincheck/issues
- **Twitter**: @fincheck

## Compliance

FinCheck complies with:
- Chrome Web Store Developer Program Policies
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Indian Information Technology Act, 2000

## Consent

By using FinCheck, you consent to:
- Temporary processing of webpage content for scam analysis
- Use of third-party APIs as described above
- Local storage of settings on your device

You can withdraw consent by uninstalling the extension.

---

**Summary**: FinCheck analyzes webpage content to detect financial scams but does NOT collect, store, or share your personal information. All processing is temporary and necessary for the service. Your privacy is our priority.
