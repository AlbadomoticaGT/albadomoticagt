/*
# Add UTM tracking columns to quote_requests

1. Modified Tables
- `quote_requests`
  - `utm_source` (text, nullable) — traffic source (google, facebook, etc.)
  - `utm_medium` (text, nullable) — traffic medium (cpc, organic, etc.)
  - `utm_campaign` (text, nullable) — campaign name
  - `utm_term` (text, nullable) — campaign term
  - `utm_content` (text, nullable) — campaign content variant
  - `lead_source` (text, nullable) — human-readable combined source string

2. Security
- No policy changes. Existing INSERT policy for anon + authenticated still applies.
- New columns are nullable so existing rows and future inserts without UTM data work fine.

3. Notes
- These columns enable Google Ads conversion tracking by tying form submissions
  back to the campaign that brought the visitor.
- The frontend captures UTM params from the URL on page load and sends them with
  the form submission.
*/

ALTER TABLE quote_requests
  ADD COLUMN IF NOT EXISTS utm_source text,
  ADD COLUMN IF NOT EXISTS utm_medium text,
  ADD COLUMN IF NOT EXISTS utm_campaign text,
  ADD COLUMN IF NOT EXISTS utm_term text,
  ADD COLUMN IF NOT EXISTS utm_content text,
  ADD COLUMN IF NOT EXISTS lead_source text;

CREATE INDEX IF NOT EXISTS idx_quote_requests_utm_source ON quote_requests (utm_source);
CREATE INDEX IF NOT EXISTS idx_quote_requests_lead_source ON quote_requests (lead_source);
