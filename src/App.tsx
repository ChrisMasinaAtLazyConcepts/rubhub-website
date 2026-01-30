import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { 
  Star, Download, User, ArrowRight,
  Heart, Shield, CreditCard, Lock,
  Sparkles, TrendingUp, Users, Calendar,
  Zap, CheckCircle, Award, MapPin
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cell: '',
    whatsapp: '',
    experience: '',
    speciality: '',
  });
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('/api/spa-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Application submitted successfully:', data);
    toast.success('Welcome to Mobile Spa! Your application is being reviewed.');

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      cell: '',
      whatsapp: '',
      experience: '',
      speciality: '',
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    toast.error('Failed to submit application. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const specialities = [
    'Swedish Massage',
    'Deep Tissue',
    'Sports Massage',
    'Prenatal',
    'Reflexology',
    'Aromatherapy',
    'Hot Stone',
    'Thai Massage',
    'Shiatsu',
    'Corporate Wellness',
    'Mobile Spa Services'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0FFF4] to-white flex flex-col">
      <Toaster position="top-right" />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-green-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-green-800">Mobile Spa</span>
          
          </div>
        
        </div>
      </nav>
		
        {/* Background pattern */}
       <section id="signup" className="relative min-h-[700px] md:min-h-[800px] flex items-center">
  {/* Background Image with Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
  </div>

  <div className="relative z-10 w-full py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Content Container with Glass Effect */}
      <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
        
        {/* Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-[#0F455D]/30 to-[#00CFC1]/30 backdrop-blur-md rounded-full px-6 py-2.5 mb-6 border border-white/30">
          <Sparkles className="w-5 h-5 text-white mr-2" />
          <span className="text-white text-sm font-semibold">Join South Africa's Premier Mobile Spa Network</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Massage on demand
          <br />
          <span className="text-[#00CFC1] drop-shadow-lg">Join our elite mobile spa network</span>
        </h1>
        
        {/* Benefits List */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <CheckCircle className="w-5 h-5 text-[#00CFC1] mr-2" />
            <span className="text-white font-medium">Keep track of your earnings</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <CheckCircle className="w-5 h-5 text-[#00CFC1] mr-2" />
            <span className="text-white font-medium">Premium mobile spa kit</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <CheckCircle className="w-5 h-5 text-[#00CFC1] mr-2" />
            <span className="text-white font-medium">Flexible working hours</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
            <CheckCircle className="w-5 h-5 text-[#00CFC1] mr-2" />
            <span className="text-white font-medium">Professional training & support</span>
          </div>
        </div>
        
       
        
      </div>
    </div>
  </div>
</section>
        
       
 

      {/* Signup Form */}
      <section id="signup" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-green-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Sign up and join our elite mobile spa network
              </h2>
              <p className="text-gray-600">
                Apply in 2 minutes. Start your mobile spa career in 48 hours (Pending verification)
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Surname"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cell Number *
                  </label>
                  <input
                    type="tel"
                    name="cell"
                    value={formData.cell}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="071 234 5678"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="071 234 5678"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speciality *
                  </label>
                  <select
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your speciality</option>
                    {specialities.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Sign up
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                By joining Mobile Spa, you agree to our Terms of Service. 
                Professional certification and mobile spa kit provided upon approval.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer with POPIA and PayFast */}
      <footer className="mt-auto bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Mobile Spa</h3>
                  <p className="text-green-300 text-sm">Premium At-Home Wellness</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                South Africa's premier network for mobile spa professionals, bringing luxury wellness experiences directly to clients' homes and offices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Calendar className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* POPIA Compliance */}
            <div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <h4 className="font-semibold text-lg">POPIA Compliant</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Mobile Spa is fully compliant with the Protection of Personal Information Act (POPIA). 
                Your professional data is encrypted and protected with enterprise-grade security.
              </p>
              <div className="mt-3 flex items-center text-sm text-gray-300">
                <Lock className="w-4 h-4 mr-2" />
                <span>GDPR & POPIA Certified</span>
              </div>
            </div>
            
            {/* Payment Partner with REAL PayFast Logo */}
            <div>Secure Payment Gateway
			<img 
                      src="https://payfast.io/wp-content/uploads/2024/12/Payfast-logo.svg" 
                      alt="PayFast" 
                      className="h-8 w-auto"
                      onError={(e) => {
                        // Fallback if CDN fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = `
                          <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center mr-2">
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                          </div>
                          <div>
                            <p class="font-bold text-white">PayFast</p>
                            <p class="text-xs text-gray-400">Official Payment Partner</p>
                          </div>
                        `;
                      }}
                    />
           
              
           
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Mobile Spa Network. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Bringing luxury wellness to every corner of South Africa
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  POPIA Compliance
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  Therapist Agreement
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors hover:underline">
                  Contact Support
                </a>
              </div>
            </div>
            
          
          
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;