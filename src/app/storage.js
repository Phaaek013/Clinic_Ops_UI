const AUTH_KEY = 'clinicops_demo_auth';

export function getAuth() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setAuth(auth) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY);
}

export const mockUsers = {
  'lifemed@demo.local': { password: '123456', role: 'LIFEMED_STAFF', defaultRoute: '/ui/dashboard-equipe-lifemed' },
  'internal@demo.local': { password: '123456', role: 'INTERNAL_STAFF', defaultRoute: '/ui/dashboard-clinicops-dark-mode' },
  'admin@demo.local': { password: '123456', role: 'ADMIN', defaultRoute: '/ui/dashboard-clinicops-dark-mode' }
};
