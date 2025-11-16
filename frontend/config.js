// api configuration
const CONFIG = {
  // automatically detect environment based on hostname
  API_URL: (() => {
    const hostname = window.location.hostname;
    const protocol = window.location.protocol;
    
    // development: localhost or 127.0.0.1
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }
    
    // local file access
    if (protocol === 'file:') {
      return 'http://localhost:5000/api';
    }
    
    // production: tamta.ge domain
    return 'https://tamta.ge/api';
  })(),
  
  ENDPOINTS: {
    CONTACT: '/contact',
    CSRF_TOKEN: '/csrf-token',
    HEALTH: '/health'
  }
};

// make it available globally
window.CONFIG = CONFIG;

// debug log (remove in production)
console.log('🔧 API Configuration:', {
  url: CONFIG.API_URL,
  hostname: window.location.hostname
});