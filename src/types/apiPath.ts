/**
 * This file defines the API paths used in the application. 
 * Each path corresponds to a specific endpoint on the server.
 * Keeping these paths in a centralized location allows for easier maintenance and consistency across the codebase. If the API endpoints change, you only need to update them here.
 */

export enum AUTH_ENDPOINTS {
    LOGIN = '/v1/auth/login',
    REGISTER = '/v1/auth/register',
    REFRESH_TOKEN = '/v1/auth/refresh-token',
}