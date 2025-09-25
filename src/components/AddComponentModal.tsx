import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface AddComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddComponentModal = ({ isOpen, onClose }: AddComponentModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: '',
    description: '',
    supplier: '',
    unitPrice: '',
    currentStock: '',
    minThreshold: '',
    maxThreshold: '',
    unit: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.sku || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Save to localStorage (in real app, this would be saved to database)
    const components = JSON.parse(localStorage.getItem('components') || '[]');
    const newComponent = {
      id: Date.now(),
      ...formData,
      currentStock: parseInt(formData.currentStock) || 0,
      minThreshold: parseInt(formData.minThreshold) || 0,
      maxThreshold: parseInt(formData.maxThreshold) || 0,
      unitPrice: parseFloat(formData.unitPrice) || 0,
      createdAt: new Date().toISOString(),
      status: parseInt(formData.currentStock) > parseInt(formData.minThreshold) ? 'In Stock' : 'Low Stock'
    };
    components.push(newComponent);
    localStorage.setItem('components', JSON.stringify(components));

    toast.success("Component added successfully!");
    
    // Reset form
    setFormData({
      name: '',
      sku: '',
      category: '',
      description: '',
      supplier: '',
      unitPrice: '',
      currentStock: '',
      minThreshold: '',
      maxThreshold: '',
      unit: '',
      location: ''
    });
    
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Component</DialogTitle>
          <DialogDescription>
            Add a new component to your inventory system.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Component Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g., Resistor 100Ω"
                required
              />
            </div>
            <div>
              <Label htmlFor="sku">SKU *</Label>
              <Input
                id="sku"
                value={formData.sku}
                onChange={(e) => handleChange('sku', e.target.value)}
                placeholder="e.g., RES-100-001"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="resistors">Resistors</SelectItem>
                  <SelectItem value="capacitors">Capacitors</SelectItem>
                  <SelectItem value="diodes">Diodes</SelectItem>
                  <SelectItem value="ics">Integrated Circuits</SelectItem>
                  <SelectItem value="transistors">Transistors</SelectItem>
                  <SelectItem value="inductors">Inductors</SelectItem>
                  <SelectItem value="connectors">Connectors</SelectItem>
                  <SelectItem value="sensors">Sensors</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="supplier">Supplier</Label>
              <Input
                id="supplier"
                value={formData.supplier}
                onChange={(e) => handleChange('supplier', e.target.value)}
                placeholder="Supplier name"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Detailed description of the component"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="unitPrice">Unit Price</Label>
              <Input
                id="unitPrice"
                type="number"
                step="0.01"
                value={formData.unitPrice}
                onChange={(e) => handleChange('unitPrice', e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div>
              <Label htmlFor="unit">Unit</Label>
              <Select value={formData.unit} onValueChange={(value) => handleChange('unit', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pieces">Pieces</SelectItem>
                  <SelectItem value="meters">Meters</SelectItem>
                  <SelectItem value="kg">Kilograms</SelectItem>
                  <SelectItem value="liters">Liters</SelectItem>
                  <SelectItem value="rolls">Rolls</SelectItem>
                  <SelectItem value="sheets">Sheets</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location">Storage Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="e.g., A1-B2"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="currentStock">Current Stock</Label>
              <Input
                id="currentStock"
                type="number"
                value={formData.currentStock}
                onChange={(e) => handleChange('currentStock', e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <Label htmlFor="minThreshold">Min Threshold</Label>
              <Input
                id="minThreshold"
                type="number"
                value={formData.minThreshold}
                onChange={(e) => handleChange('minThreshold', e.target.value)}
                placeholder="10"
              />
            </div>
            <div>
              <Label htmlFor="maxThreshold">Max Threshold</Label>
              <Input
                id="maxThreshold"
                type="number"
                value={formData.maxThreshold}
                onChange={(e) => handleChange('maxThreshold', e.target.value)}
                placeholder="1000"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Component</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddComponentModal;