
/**
 * @fileoverview User Data Model
 *
 * This file will define the data structure and schema for a User object.
 * Using a schema definition tool like Zod would be a good practice to ensure
 * data consistency throughout the application.
 */

import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  passwordHash: z.string(), // Never store plain text passwords
  createdAt: z.date(),
  updatedAt: z.date(),
  
  // Membership and Payment Details
  subscription: z.object({
    plan: z.enum(['free', 'pro', 'business']),
    status: z.enum(['active', 'canceled', 'past_due']),
    tokensRemaining: z.number().int(),
    renewalDate: z.date().optional(),
    paymentProviderCustomerId: z.string().optional(),
  }).optional(),

  // Privacy Settings
  privacySettings: z.object({
    shareUsageData: z.boolean().default(true),
    marketingEmails: z.boolean().default(false),
  }).optional(),
});

export type User = z.infer<typeof UserSchema>;
