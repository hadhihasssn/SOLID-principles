// Single Responsibility Principle (SRP)
// Definition: A class should have one, and only one, reason to change. This means that a class should only have one job or responsibility.
// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// Class representing a user in the system
export class User {
    id: string;
    name: string;
    email: string;

    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

// This class for authenticating the user.  Class has only one responsible for the check the authenticity.
// This class is responsible for authenticating users.
export class AuthService {
    authenticateUser(username: string, password: string): boolean {
        // Logic for user authentication
        // In a real scenario, you would check the username and password against a database.
        // Here we simulate authentication with a simple check.
        if (username === 'user' && password === 'password') {
            return true;
        }
        return false;
    }
}

// This class is responsible for retrieving user data.
export class UserDataService {
    getUserData(userId: string): User {
        // Logic to get user data
        // In a real scenario, you would fetch this data from a database.
        // Here we return a dummy user for demonstration purposes.
        return new User(userId, 'John Doe', 'john.doe@example.com');
    }
}
