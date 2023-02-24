pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checkouting"
            }
        }

        stage('Build') {
            steps {
                // Install Node.js and npm
                sh 'sudo curl -sL https://deb.nodesource.com/setup_14.x | bash -'
                sh 'sudo apt-get install -y nodejs'

                // Install project dependencies
                sh 'npm install'

                // Build the project
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "Testing"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying"
            }
        }
    }


}