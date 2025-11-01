import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

export interface User {
  id: string;
  name: string;
  email: string;
  hashedPassword: string;
  createdAt: string;
}

const USERS_FILE = path.join(process.cwd(), 'lib', 'users.json');

// Ensure users file exists
function ensureUsersFile() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
  }
}

// Get all users
export function getUsers(): User[] {
  try {
    ensureUsersFile();
    const data = fs.readFileSync(USERS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users file:', error);
    return [];
  }
}

// Get user by email
export function getUserByEmail(email: string): User | null {
  const users = getUsers();
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
}

// Get user by id
export function getUserById(id: string): User | null {
  const users = getUsers();
  return users.find((user) => user.id === id) || null;
}

// Create new user
export function createUser(name: string, email: string, password: string): User {
  const users = getUsers();
  
  // Check if user already exists
  if (getUserByEmail(email)) {
    throw new Error('User with this email already exists');
  }

  // Hash password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create new user
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email: email.toLowerCase(),
    hashedPassword,
    createdAt: new Date().toISOString(),
  };

  // Save to file
  users.push(newUser);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  return newUser;
}

// Verify password
export function verifyPassword(password: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}

// Authenticate user
export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = getUserByEmail(email);
  
  if (!user) {
    return null;
  }

  const isValid = verifyPassword(password, user.hashedPassword);
  
  if (!isValid) {
    return null;
  }

  return user;
}
