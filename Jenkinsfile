pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "checkout"
            }
        }

        stage('Build') {
            steps {
                 nodejs(nodeJSInstallationName: 'Node 19.7.0', configId: 'MyNpmrcConfig') {
                    sh 'npm --version'
                 }
            }
        }

        stage('Test') {
            steps {
                echo "tEST6"
            }
        }

        stage('Deploy') {
            steps {
                echo "deploy"
            }
        }
    }
}