-- Insert sample pharmacy products
INSERT INTO products (name, description, price, stock_quantity, category, requires_prescription) VALUES
('Paracetamol 500mg', 'Pain relief and fever reducer tablets', 8.99, 100, 'Pain Relief', false),
('Ibuprofen 400mg', 'Anti-inflammatory pain relief tablets', 12.50, 75, 'Pain Relief', false),
('Vitamin C 1000mg', 'Immune system support tablets', 15.99, 50, 'Vitamins', false),
('Multivitamin Complex', 'Daily essential vitamins and minerals', 24.99, 30, 'Vitamins', false),
('Cough Syrup', 'Relief for dry and productive coughs', 18.75, 40, 'Cold & Flu', false),
('Antiseptic Cream', 'Topical antiseptic for minor cuts and wounds', 9.99, 60, 'First Aid', false),
('Blood Pressure Monitor', 'Digital automatic blood pressure monitor', 89.99, 15, 'Medical Devices', false),
('Thermometer Digital', 'Fast and accurate digital thermometer', 19.99, 25, 'Medical Devices', false),
('Bandages Assorted', 'Variety pack of adhesive bandages', 6.99, 80, 'First Aid', false),
('Hand Sanitizer 500ml', 'Alcohol-based hand sanitizer gel', 7.99, 120, 'Hygiene', false);
