pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 19.7.0', configId: 'MyNpmrcConfig') {
                    sh 'npm --version'
                }
            }
        }

        stage('Build') {
            steps {
                // Add build steps here
            }
        }

        stage('Test') {
            steps {
                // Add test steps here
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here
            }
        }
    }


}