-- Create a default admin user for testing
-- Note: In production, this should be done through a secure admin registration process

-- First, we need to insert into auth.users (this is typically done by Supabase auth)
-- For demo purposes, we'll create a trigger to auto-create admin profile

CREATE OR REPLACE FUNCTION create_admin_profile()
RETURNS TRIGGER AS $$
BEGIN
  -- Only create admin profile if email contains 'admin'
  IF NEW.email LIKE '%admin%' THEN
    INSERT INTO public.admin_users (id, email, full_name, role)
    VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data->>'full_name', 'Admin User'),
      'admin'
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to auto-create admin profiles
DROP TRIGGER IF EXISTS on_auth_user_created_admin ON auth.users;
CREATE TRIGGER on_auth_user_created_admin
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION create_admin_profile();

-- Insert a sample admin user directly (for demo purposes)
-- In production, admins should sign up through the auth system
INSERT INTO admin_users (id, email, full_name, role) 
VALUES (
  gen_random_uuid(),
  'admin@pharmacare.com',
  'PharmaCare Administrator',
  'super_admin'
) ON CONFLICT (email) DO NOTHING;
