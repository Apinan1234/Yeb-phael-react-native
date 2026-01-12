import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { colors } from '../theme/colors';
import {
    Bell,
    FolderOpen,
    ArrowUpCircle,
    PlayCircle,
    Home as HomeIcon,
    Video,
    Layout,
    User,
} from 'lucide-react-native';

const SESSION_DATA = [
    { id: '1', date: '21-12-2025', status: 'Pass', score: 96 },
    { id: '2', date: '20-12-2025', status: 'Pass', score: 87 },
    { id: '3', date: '18-12-2025', status: 'Fail', score: 42 },
];

const ResultItem = ({ item }) => (
    <View style={styles.resultCard}>
        <View style={styles.resultLeft}>
            <View style={styles.videoIconContainer}>
                <PlayCircle size={24} color={colors.primary} />
            </View>
            <View>
                <Text style={styles.resultDate}>{item.date}</Text>
                <Text style={[styles.statusBadge, { color: item.status === 'Pass' ? colors.success : colors.error }]}>
                    {item.status}
                </Text>
            </View>
        </View>
        <View style={[styles.scoreBubble, { backgroundColor: item.status === 'Pass' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)' }]}>
            <Text style={[styles.scoreText, { color: item.status === 'Pass' ? colors.success : colors.error }]}>
                {item.score}
            </Text>
        </View>
    </View>
);

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Top Header */}
                <View style={styles.header}>
                    <View style={styles.profileSection}>
                        <View style={styles.avatar}>
                            <User size={30} color={colors.grey} />
                        </View>
                        <View>
                            <Text style={styles.greeting}>Hello,</Text>
                            <Text style={styles.userName}>Teeruthai!</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.notificationBtn}>
                        <Bell size={24} color={colors.black} />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Upload Card */}
                <View style={styles.uploadCard}>
                    <View style={styles.uploadInfo}>
                        <View style={styles.folderIcon}>
                            <FolderOpen size={32} color={colors.primary} />
                        </View>
                        <View>
                            <Text style={styles.uploadTitle}>Upload New Video</Text>
                            <Text style={styles.uploadSubtitle}>Now!</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.uploadBtn}>
                        <Text style={styles.uploadBtnText}>Upload</Text>
                        <ArrowUpCircle size={20} color={colors.white} style={{ marginLeft: 8 }} />
                    </TouchableOpacity>
                </View>

                {/* Statistics Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Work & Experience</Text>
                </View>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>9</Text>
                        <Text style={styles.statLabel}>Total sessions</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>87</Text>
                        <Text style={styles.statLabel}>Avg score</Text>
                    </View>
                </View>

                {/* Last Sessions List */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Last Session Result</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>

                {SESSION_DATA.map(item => (
                    <ResultItem key={item.id} item={item} />
                ))}
            </ScrollView>

            {/* Bottom Tab Bar */}
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tabItem}>
                    <HomeIcon size={24} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Video size={24} color={colors.grey} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <Layout size={24} color={colors.grey} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem}>
                    <User size={24} color={colors.grey} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F5F9', // Light grey background
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 100, // Space for tab bar
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    greeting: {
        fontSize: 14,
        color: colors.grey,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.black,
    },
    notificationBtn: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.error,
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.white,
    },
    badgeText: {
        color: colors.white,
        fontSize: 10,
        fontWeight: '700',
    },
    uploadCard: {
        backgroundColor: colors.white,
        borderRadius: 24,
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    uploadInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    folderIcon: {
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: 'rgba(45, 90, 240, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    uploadTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black,
    },
    uploadSubtitle: {
        fontSize: 14,
        color: colors.grey,
    },
    uploadBtn: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 12,
    },
    uploadBtnText: {
        color: colors.white,
        fontWeight: '600',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.black,
    },
    seeAll: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '600',
    },
    statsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    statBox: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 20,
        marginRight: 15,
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: '800',
        color: colors.black,
    },
    statLabel: {
        fontSize: 12,
        color: colors.grey,
        marginTop: 4,
    },
    resultCard: {
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    resultLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    videoIconContainer: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    resultDate: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
    },
    statusBadge: {
        fontSize: 12,
        fontWeight: '700',
        marginTop: 2,
    },
    scoreBubble: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scoreText: {
        fontSize: 16,
        fontWeight: '800',
    },
    tabBar: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        height: 70,
        backgroundColor: colors.white,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10,
    },
    tabItem: {
        padding: 10,
    },
});

export default HomeScreen;
