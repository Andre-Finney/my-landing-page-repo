import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Clock, Shield, FileText, Star, Users, Award, Mail } from 'lucide-react'
import heroImage from './assets/hero_image.jpg'
import ebookCover from './assets/ebook_cover.jpg'
import benefitsIllustration from './assets/benefits_illustration.jpg'

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-900">Outlast The IRS</h1>
            <Button 
              onClick={() => scrollToSection('products')}
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                Proven Legal Strategy
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
                Outlast The IRS
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A step-by-step strategy to legally delay IRS collections until they expire. 
                Created by someone who used this exact system to eliminate over $300,000 in tax debt.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">
                  ✅ This system has helped eliminate millions in IRS liabilities
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('products')}
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg"
                >
                  Choose Your Solution
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('how-it-works')}
                  className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg"
                >
                  How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional breaking free from tax debt" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creator Credibility */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Created by David Green
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            David Green is the creator of Outlast the IRS — a practical, results-driven system that shows 
            everyday people how to take control of their IRS situation without hiring overpriced tax professionals. 
            Drawing from personal experience and years of research, David developed a proven approach to legally 
            delay IRS collections, freeze enforcement action, and let tax debt expire under federal statute.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">$300,000+</div>
              <p className="text-gray-600">Personal tax debt eliminated using this exact system</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">Millions</div>
              <p className="text-gray-600">In IRS liabilities eliminated by system users</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              How The Strategy Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage the IRS's own procedures and response times to your advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  10-Year Collection Limit
                </h3>
                <p className="text-gray-600">
                  The IRS has only 10 years to collect tax debt. After that, it legally expires.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Strategic Delays
                </h3>
                <p className="text-gray-600">
                  Use legal correspondence tactics to delay IRS action and run down the clock.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Legal Protection
                </h3>
                <p className="text-gray-600">
                  Stay compliant while protecting your assets and buying valuable time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <img 
              src={benefitsIllustration} 
              alt="Benefits of understanding IRS collection processes" 
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need templates, a complete system, or ongoing support, we have the right solution for your situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Template Bundle */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Template Bundle</h3>
                  <p className="text-gray-600">Ready-to-use IRS response letters</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">$39.99</div>
                  <p className="text-gray-500">One-time purchase</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">10 formatted response letters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Delay requests & clarifications</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Strategic omissions included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant download</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Get Templates
                </Button>
              </CardContent>
            </Card>

            {/* Complete System - Featured */}
            <Card className="border-2 border-amber-400 hover:border-amber-500 transition-colors relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-amber-500 text-white px-4 py-1 text-sm font-semibold">
                  MOST POPULAR
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Award className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Complete System</h3>
                  <p className="text-gray-600">Full step-by-step strategy guide</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">$49.99</div>
                  <p className="text-gray-500">One-time purchase</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Complete strategy system</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Step-by-step instructions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Printable tracker included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Sample letter tactics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Money-back guarantee</span>
                  </li>
                </ul>

                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Get Complete System
                </Button>
              </CardContent>
            </Card>

            {/* Pro Support */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Pro Support</h3>
                  <p className="text-gray-600">Ongoing guidance & support</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-900 mb-2">$29.99</div>
                  <p className="text-gray-500">per month</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Full template library access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Custom formatting help</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Expert updates & tips</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Email support access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Cancel anytime</span>
                  </li>
                </ul>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Start Pro Support
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Not sure which option is right for you?
            </p>
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
              Compare All Options
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why This Strategy Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                10
              </div>
              <h3 className="font-semibold mb-2">Years Maximum</h3>
              <p className="text-blue-100">IRS collection statute of limitations</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                6+
              </div>
              <h3 className="font-semibold mb-2">Months Average</h3>
              <p className="text-blue-100">IRS response time to correspondence</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                24
              </div>
              <h3 className="font-semibold mb-2">Months Maximum</h3>
              <p className="text-blue-100">Offer in Compromise processing time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take Control of Your IRS Situation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let tax debt control your life. Join thousands who have successfully used this system 
            to eliminate their IRS liabilities legally and ethically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('products')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4 text-xl font-semibold"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-12 py-4 text-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Outlast The IRS</h3>
              <p className="text-gray-400">
                Empowering individuals with legal strategies to manage tax debt and achieve financial freedom 
                without expensive tax professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Important Disclaimer</h4>
              <p className="text-gray-400 text-sm">
                This system provides educational information only and does not constitute legal or tax advice. 
                You are solely responsible for any documents you choose to send to the IRS. 
                Consult with qualified professionals for your specific situation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                For questions about these products, please contact our support team through the 
                Pro Support Plan or visit our contact page.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Outlast The IRS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

