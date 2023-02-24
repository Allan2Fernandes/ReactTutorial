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