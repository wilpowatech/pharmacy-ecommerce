-- Add pharmaceutical-specific fields to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS manufacturer TEXT,
ADD COLUMN IF NOT EXISTS strength TEXT,
ADD COLUMN IF NOT EXISTS dosage_form TEXT,
ADD COLUMN IF NOT EXISTS active_ingredient TEXT;

-- Create indexes for better search performance
CREATE INDEX IF NOT EXISTS idx_products_manufacturer ON products(manufacturer);
CREATE INDEX IF NOT EXISTS idx_products_active_ingredient ON products(active_ingredient);
CREATE INDEX IF NOT EXISTS idx_products_strength ON products(strength);

-- Update existing products with sample pharmaceutical data
UPDATE products SET 
  manufacturer = 'Generic Pharma',
  strength = '200mg',
  dosage_form = 'Tablet',
  active_ingredient = 'Ibuprofen'
WHERE name ILIKE '%ibuprofen%' AND manufacturer IS NULL;

UPDATE products SET 
  manufacturer = 'VitaHealth',
  strength = '1000 IU',
  dosage_form = 'Capsule',
  active_ingredient = 'Cholecalciferol'
WHERE name ILIKE '%vitamin d%' AND manufacturer IS NULL;
