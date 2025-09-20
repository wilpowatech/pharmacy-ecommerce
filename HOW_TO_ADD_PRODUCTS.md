# How to Add Products to Your Pharmacy Platform

## Method 1: Using the Admin Dashboard (Recommended)

### Step 1: Access Admin Dashboard
1. Go to `http://localhost:3000/admin/login`
2. Sign up for an admin account using an email with "admin" in it (e.g., `admin@yourstore.com`)
3. Check your email and confirm your account
4. Log in to access the admin dashboard

### Step 2: Add Products via Dashboard
1. Navigate to the **Products** section in the admin dashboard
2. Click the **"Add Product"** button
3. Fill in the product details:
   - **Name**: Product name (e.g., "Ibuprofen 200mg")
   - **Description**: Detailed product description
   - **Price**: Product price in dollars
   - **Category**: Product category (e.g., "Pain Relief", "Vitamins")
   - **Stock**: Available quantity
   - **Requires Prescription**: Check if it's a prescription medication
   - **Image URL**: Product image URL (optional)
4. Click **"Add Product"** to save

## Method 2: Direct Database Insert (Advanced)

### Using SQL Scripts
You can add products directly by running SQL commands in your Supabase dashboard:

\`\`\`sql
INSERT INTO products (name, description, price, category, stock_quantity, requires_prescription, image_url)
VALUES 
  ('Aspirin 325mg', 'Pain reliever and fever reducer', 8.99, 'Pain Relief', 100, false, '/placeholder.svg?height=200&width=200'),
  ('Vitamin D3 1000 IU', 'Essential vitamin for bone health', 12.99, 'Vitamins', 75, false, '/placeholder.svg?height=200&width=200'),
  ('Amoxicillin 500mg', 'Antibiotic for bacterial infections', 24.99, 'Antibiotics', 50, true, '/placeholder.svg?height=200&width=200');
\`\`\`

### Bulk Import via CSV
1. Prepare a CSV file with columns: name, description, price, category, stock_quantity, requires_prescription, image_url
2. Use Supabase's CSV import feature in the dashboard
3. Map the columns correctly and import

## Product Categories

Common pharmacy categories you can use:
- **Pain Relief**: Aspirin, Ibuprofen, Acetaminophen
- **Vitamins**: Multivitamins, Vitamin D, Vitamin C, B-Complex
- **Cold & Flu**: Cough syrup, Decongestants, Throat lozenges
- **First Aid**: Bandages, Antiseptics, Thermometers
- **Digestive Health**: Antacids, Probiotics, Fiber supplements
- **Skin Care**: Moisturizers, Sunscreen, Acne treatments
- **Allergies**: Antihistamines, Nasal sprays
- **Prescription**: Antibiotics, Blood pressure medications, Diabetes medications

## Product Image Guidelines

### Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x400px minimum
- **Quality**: High resolution for clear display
- **Background**: White or transparent preferred

### Image Sources:
1. **Placeholder Images**: Use `/placeholder.svg?height=200&width=200&query=product+name` for testing
2. **Stock Photos**: Use royalty-free medical/pharmacy stock images
3. **Product Photos**: Take your own photos of actual products
4. **Manufacturer Images**: Use official product images (with permission)

## Sample Products to Get Started

Here are some sample products you can add:

### Over-the-Counter Medications:
\`\`\`sql
INSERT INTO products (name, description, price, category, stock_quantity, requires_prescription, image_url) VALUES
('Tylenol Extra Strength 500mg', 'Fast-acting pain relief and fever reducer', 9.99, 'Pain Relief', 120, false, '/placeholder.svg?height=200&width=200'),
('Advil Liqui-Gels 200mg', 'Fast pain relief with ibuprofen', 11.99, 'Pain Relief', 85, false, '/placeholder.svg?height=200&width=200'),
('Centrum Multivitamin', 'Complete daily multivitamin for adults', 15.99, 'Vitamins', 60, false, '/placeholder.svg?height=200&width=200'),
('Robitussin Cough Syrup', 'Effective cough suppressant', 8.49, 'Cold & Flu', 45, false, '/placeholder.svg?height=200&width=200'),
('Band-Aid Adhesive Bandages', 'Flexible fabric bandages for wound care', 4.99, 'First Aid', 200, false, '/placeholder.svg?height=200&width=200');
\`\`\`

### Prescription Medications (Examples):
\`\`\`sql
INSERT INTO products (name, description, price, category, stock_quantity, requires_prescription, image_url) VALUES
('Lisinopril 10mg', 'ACE inhibitor for high blood pressure', 12.99, 'Prescription', 30, true, '/placeholder.svg?height=200&width=200'),
('Metformin 500mg', 'Diabetes medication to control blood sugar', 8.99, 'Prescription', 40, true, '/placeholder.svg?height=200&width=200'),
('Atorvastatin 20mg', 'Cholesterol-lowering medication', 15.99, 'Prescription', 25, true, '/placeholder.svg?height=200&width=200');
\`\`\`

## Managing Inventory

### Stock Management:
- Monitor stock levels in the admin dashboard
- Set up low-stock alerts
- Update quantities when receiving new inventory
- Mark products as "Out of Stock" when needed

### Pricing Updates:
- Regular price reviews and updates
- Seasonal promotions and discounts
- Bulk pricing for quantity purchases
- Insurance copay calculations

## Best Practices

1. **Accurate Descriptions**: Include dosage, active ingredients, and usage instructions
2. **Proper Categorization**: Use consistent category names for easy browsing
3. **Stock Monitoring**: Keep inventory levels updated
4. **Prescription Verification**: Always mark prescription medications correctly
5. **Image Quality**: Use clear, professional product images
6. **Regular Updates**: Keep product information current and accurate

## Troubleshooting

### Common Issues:
- **Products not showing**: Check if stock_quantity > 0
- **Images not loading**: Verify image URLs are accessible
- **Admin access denied**: Ensure your email contains "admin"
- **Database errors**: Check required fields are filled

### Getting Help:
- Check the FAQ section for common questions
- Contact support for technical issues
- Review database logs for error details
