"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Upload } from "lucide-react";

interface AddProductDialogProps {
  children: React.ReactNode;
}

export function AddProductDialog({ children }: AddProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock_quantity: "",
    category: "",
    manufacturer: "",
    strength: "",
    dosage_form: "",
    active_ingredient: "",
    image_url: "",
    requires_prescription: false,
  });

  const categories = [
    "Pain Relief",
    "Vitamins & Supplements",
    "Cold & Flu",
    "First Aid",
    "Medical Devices",
    "Personal Care",
    "Prescription Medications",
    "Digestive Health",
    "Allergy Relief",
    "Skin Care",
    "Eye Care",
    "Oral Care",
  ];

  const dosageForms = [
    "Tablet",
    "Capsule",
    "Liquid/Syrup",
    "Cream/Ointment",
    "Drops",
    "Spray",
    "Injection",
    "Patch",
    "Inhaler",
    "Suppository",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.from("products").insert({
        name: formData.name,
        description: formData.description,
        price: Number.parseFloat(formData.price),
        stock_quantity: Number.parseInt(formData.stock_quantity),
        category: formData.category,
        manufacturer: formData.manufacturer,
        strength: formData.strength,
        dosage_form: formData.dosage_form,
        active_ingredient: formData.active_ingredient,
        image_url:
          formData.image_url ||
          `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(formData.name)}`,
        requires_prescription: formData.requires_prescription,
      });

      if (error) throw error;

      setOpen(false);
      setFormData({
        name: "",
        description: "",
        price: "",
        stock_quantity: "",
        category: "",
        manufacturer: "",
        strength: "",
        dosage_form: "",
        active_ingredient: "",
        image_url: "",
        requires_prescription: false,
      });
      router.refresh();
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              placeholder="e.g., Ibuprofen 200mg Tablets"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="manufacturer">Manufacturer</Label>
              <Input
                id="manufacturer"
                placeholder="e.g., Johnson & Johnson"
                value={formData.manufacturer}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    manufacturer: e.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="active_ingredient">Active Ingredient</Label>
              <Input
                id="active_ingredient"
                placeholder="e.g., Ibuprofen"
                value={formData.active_ingredient}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    active_ingredient: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="strength">Strength/Dosage</Label>
              <Input
                id="strength"
                placeholder="e.g., 200mg, 500ml, 10%"
                value={formData.strength}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, strength: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dosage_form">Dosage Form</Label>
              <Select
                value={formData.dosage_form}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, dosage_form: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select form" />
                </SelectTrigger>
                <SelectContent>
                  {dosageForms.map((form) => (
                    <SelectItem key={form} value={form}>
                      {form}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Detailed product description, usage instructions, warnings..."
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($) *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, price: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity *</Label>
              <Input
                id="stock"
                type="number"
                placeholder="0"
                value={formData.stock_quantity}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    stock_quantity: e.target.value,
                  }))
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, category: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Product Image URL</Label>
            <div className="relative">
              <Upload className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="image_url"
                placeholder="https://example.com/product-image.jpg (optional)"
                value={formData.image_url}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    image_url: e.target.value,
                  }))
                }
                className="pl-10"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Leave empty to use auto-generated placeholder image
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="prescription"
              checked={formData.requires_prescription}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  requires_prescription: !!checked,
                }))
              }
            />
            <Label htmlFor="prescription">Requires Prescription</Label>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                "Add Product"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
