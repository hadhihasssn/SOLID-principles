import { AuthService, UserDataService } from ".";

// Simulating a simple user interface
class UserInterface {
    private authService: AuthService;
    private userDataService: UserDataService;

    constructor(authService: AuthService, userDataService: UserDataService) {
        this.authService = authService;
        this.userDataService = userDataService;
    }

    login(username: string, password: string): void {
        if (this.authService.authenticateUser(username, password)) {
            console.log('Login successful!');
            this.displayUserData('123'); // Pass a dummy user ID for demonstration
        } else {
            console.log('Invalid username or password.');
        }
    }

    displayUserData(userId: string): void {
        const user = this.userDataService.getUserData(userId);
        console.log(`User ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
    }
}

// Main function to demonstrate the login process
function main() {
    const authService = new AuthService();
    const userDataService = new UserDataService();
    const userInterface = new UserInterface(authService, userDataService);

    // Simulate user login
    userInterface.login('user', 'password');
}

// Run the main function to demonstrate the functionality
main();