import {Authenticator, useAuthenticator, Button} from "@aws-amplify/ui-react";
import {Text, Image, Box, Heading} from "@chakra-ui/react";
import React from "react";
import ffBannerLogo from "assets/img/FF-Banner-transparent-background.png";
import './styles.css';
export const cognitoComponents = {
    Header() {
        // const { tokens } = useTheme();

        return (
            <Box
                pt={"25px"}
                mb="25px"
                lineHeight="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Image
                    src={ffBannerLogo}
                    w="260px"
                    h="90px"
                />
            </Box>
        );
    },

    Footer() {

        return (
            <Box textAlign="center">
                <Text
                    color="gray.400"
                    textAlign={{
                        base: "center",
                        xl: "start",
                    }}
                    mb={{ base: "20px", xl: "0px" }}
                >
                    &copy; {1900 + new Date().getYear()}{" "}
                    <Text as="span">
                        {"FanFolio"}
                    </Text>
                </Text>
            </Box>
        );
    },

    SignIn: {
        // Header() {
        //     const { tokens } = useTheme();
        //
        //     return (
        //         <Heading
        //             padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
        //             level={3}
        //         >
        //         </Heading>
        //     );
        // },
        // Footer() {
        //     const { toForgotPassword } = useAuthenticator();
        //
        //     return (
        //         <Box textAlign="center">
        //             <Button
        //                 // fontWeight="normal"
        //                 // onClick={toForgotPassword}
        //                 // size="sm"
        //                 // variation="outline"
        //                 color="gray.700"
        //             >
        //                 Reset Password
        //             </Button>
        //         </Box>
        //     );
        // },
    },

    SignUp: {
        // Header() {
        //     const { tokens } = useTheme();
        //
        //     return (
        //         <Heading
        //             padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
        //             level={3}
        //         >
        //             Create a new account
        //         </Heading>
        //     );
        // },
        Footer() {
            const { toSignIn } = useAuthenticator();

            return (
                <Box textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        Back to Sign In
                    </Button>
                </Box>
            );
        },
    },
    ConfirmSignUp: {
        Header() {
            return (
                <Heading
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    SetupTotp: {
        Header() {
            return (
                <Heading
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    // ConfirmSignIn: {
    //     Header() {
    //         return (
    //             <Heading
    //                 level={6}
    //             >
    //                 SMS authentication code was sent to your number on file.
    //             </Heading>
    //         );
    //     },
    //      Footer() {
    //          return <Text>Footer Information</Text>;
    //      },
    // },
    ForgotPassword: {
        Header() {
            return (
                <Heading
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ConfirmResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
};

export const formFields = {
    signIn: {
        username: {
            placeholder: 'Enter your email',
        },
    },
    signUp: {
        username: {
            label: 'Username:',
            placeholder: 'Enter your Username:',
            isRequired: true,
            order: 1,
        },
        password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: true,
            order: 2,
        },
        confirm_password: {
            label: 'Confirm Password:',
            isRequired: true,
            order: 3,
        },
    },
    forceNewPassword: {
        password: {
            placeholder: 'Enter your Password:',
        },
    },
    forgotPassword: {
        username: {
            placeholder: 'Enter your email:',
        },
    },
    confirmResetPassword: {
        confirmation_code: {
            placeholder: 'SMS Code:',
            isRequired: true,
        },
        confirm_password: {
            placeholder: 'Enter your Password Please:',
        },
    },
    setupTotp: {
        QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
        },
        confirmation_code: {
            placeholder: 'SMS Code:',
            isRequired: true,
        },
    },
    confirmSignIn: {
        confirmation_code: {
            label: false,
            placeholder: 'Enter your SMS Code:',
            isRequired: false,
        },
    },
};

export default function App() {
    return (
        <Authenticator formFields={formFields} components={components}>
            {({ signOut }) => <button onClick={signOut}>Sign out</button>}
        </Authenticator>
    );
}