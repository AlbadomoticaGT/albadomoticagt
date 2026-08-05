/*
# Create quote_requests table

1. New Tables
- `quote_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person requesting a quote
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email address
  - `municipality` (text, not null) — municipality in Guatemala where the project is located
  - `project_type` (text, not null) — type of project (residencial, oficina, comercio, etc.)
  - `message` (text) — optional additional details from the user
  - `status` (text, default 'nueva') — internal tracking status
  - `source` (text) — where the lead came from (organic, google_ads, etc.)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `quote_requests`.
- This is a public contact form with no sign-in, so anon + authenticated can INSERT.
- No SELECT/UPDATE/DELETE for anon — only the backend (service role) reads submissions.
- This prevents public enumeration of submitted leads while allowing form submissions.

3. Notes
- The form on the homepage writes to this table via the anon key.
- Submitted leads are read by the site owner through the Supabase dashboard.
- An index on `created_at` helps with chronological queries.
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  municipality text NOT NULL,
  project_type text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'nueva',
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to INSERT new quote requests from the public form
DROP POLICY IF EXISTS "anon_insert_quote_requests" ON quote_requests;
CREATE POLICY "anon_insert_quote_requests" ON quote_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon — leads are only readable via the service role / dashboard

CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests (status);
