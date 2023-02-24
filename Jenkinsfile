pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checkout"
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
                echo "test"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy"
            }
        }
}


