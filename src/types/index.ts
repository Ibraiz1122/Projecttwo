export type VehicleCategory = 'sedan' | 'suv' | 'truck' | 'exotic';

export interface VehicleTypeOption {
  id: VehicleCategory;
  name: string;
  tagline: string;
  priceMultiplier: number;
  popularModels: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  category: 'exterior' | 'interior' | 'full-detail' | 'ceramic-protection';
  tagline: string;
  description: string;
  startingPrice: number;
  estimatedTime: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  perfectFor: string;
  image: string;
  imagePosition?: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  vehicle: string;
  category: 'Paint Correction' | 'Ceramic Coating' | 'Interior Restoration' | 'Deep Clean';
  beforeImage: string;
  afterImage: string;
  fullComparisonImage?: string;
  problem: string;
  solution: string;
  packageUsed: string;
  completionHours: string;
  beforeDefects?: string[];
  afterResults?: string[];
  beforeLabel?: string;
  afterLabel?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  neighborhood: string;
  vehicle: string;
  rating: number;
  date: string;
  review: string;
  service: string;
  verified: boolean;
  avatar: string;
}

export interface BookingFormData {
  vehicleType: VehicleCategory;
  vehicleYearMakeModel: string;
  packageId: string;
  selectedAddOns: string[];
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  serviceLocationType: 'shop' | 'mobile';
  address?: string;
  specialRequests?: string;
}
