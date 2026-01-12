import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import { Mail, Lock, Eye, EyeOff, CheckSquare, Square } from 'lucide-react-native';
import Mascot from '../components/Mascot';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState('Student'); // 'Student' or 'Instructor'
    const [agree, setAgree] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleLogin = () => {
        // Simple validation breadcrumb
        if (!email.includes('@')) {
            setEmailError('Please enter a valid email address!');
            return;
        }
        setEmailError('');
        // Navigate to Home (Screen 3)
        navigation.navigate('Home');
    };

    return (
        <LinearGradient
            colors={[colors.backgroundStart, colors.backgroundEnd]}
            style={styles.container}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.flex}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View style={styles.miniLogo}>
                            <Mascot />
                        </View>
                    </View>

                    {/* Form Card */}
                    <View style={styles.card}>
                        <Text style={styles.label}>Email</Text>
                        <View style={[styles.inputContainer, emailError ? styles.inputError : null]}>
                            <Mail size={20} color={colors.grey} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Email address"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                        <Text style={[styles.label, { marginTop: 20 }]}>Password</Text>
                        <View style={styles.inputContainer}>
                            <Lock size={20} color={colors.grey} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                {showPassword ? (
                                    <EyeOff size={20} color={colors.grey} />
                                ) : (
                                    <Eye size={20} color={colors.grey} />
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* User Type Toggle */}
                        <View style={styles.toggleContainer}>
                            <TouchableOpacity
                                style={[styles.toggleButton, userType === 'Student' && styles.activeToggle]}
                                onPress={() => setUserType('Student')}
                            >
                                <Text style={[styles.toggleText, userType === 'Student' && styles.activeToggleText]}>
                                    Student
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.toggleButton, userType === 'Instructor' && styles.activeToggle]}
                                onPress={() => setUserType('Instructor')}
                            >
                                <Text style={[styles.toggleText, userType === 'Instructor' && styles.activeToggleText]}>
                                    Instructor
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgree(!agree)}>
                            {agree ? (
                                <CheckSquare size={20} color={colors.white} />
                            ) : (
                                <Square size={20} color={colors.white} />
                            )}
                            <Text style={styles.footerText}>Terms & Privacy</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flex: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 25,
        paddingTop: 60,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    miniLogo: {
        transform: [{ scale: 0.5 }], // Smaller version of mascot
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 24,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.greyLighter,
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 56,
    },
    inputError: {
        borderWidth: 1,
        borderColor: colors.error,
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: colors.black,
    },
    errorText: {
        color: colors.error,
        fontSize: 12,
        marginTop: 4,
    },
    toggleContainer: {
        flexDirection: 'row',
        backgroundColor: colors.greyLighter,
        borderRadius: 12,
        padding: 4,
        marginTop: 24,
    },
    toggleButton: {
        flex: 1,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    activeToggle: {
        backgroundColor: colors.primary,
    },
    toggleText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.grey,
    },
    activeToggleText: {
        color: colors.white,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginTop: 12,
    },
    forgotPasswordText: {
        color: colors.grey,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },
    loginButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '700',
    },
    footer: {
        marginTop: 'auto',
        alignItems: 'center',
        paddingTop: 40,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        color: colors.white,
        marginLeft: 10,
        fontSize: 14,
    },
});

export default LoginScreen;
