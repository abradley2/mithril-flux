declare namespace payloads {

    namespace session {
        interface LOGIN {
            action: string
            username: string
            password: string
        }

        interface LOGOUT {
            action: string
        }
    }

}
