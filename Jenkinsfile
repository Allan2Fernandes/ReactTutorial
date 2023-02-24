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
//                 nodejs(nodeJSInstallationName: 'Node 19.7.0', configId: '<config-file-provider-id>') {
//                     // Install project dependencies
//                     sh 'npm install'
//
//                     // Build the project
//                     sh 'npm run build'
                    //}

            // Install Node.js and npm
           sh "echo \"Pear1234!\" | sudo -S curl -sL https://deb.nodesource.com/setup_14.x | bash -"
           sh "echo \"Pear1234!\" | sudo -S apt-get install -y nodejs"

            // Check Node.js and npm versions
            sh 'node --version'
            sh 'npm --version'

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