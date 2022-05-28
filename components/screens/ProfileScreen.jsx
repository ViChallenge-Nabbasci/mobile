import { Layout, Text, Avatar, Button, IconRegistry, Icon, Card, Toggle, Divider } from '@ui-kitten/components';
import React from "react";
import { StyleSheet, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { Row, Col, Grid } from "react-native-easy-grid";

const plusIcon = (props) => (
    <Icon name="plus-outline" {...props} />
)
const pinIcon = (props) => (
    <Icon name="pin-outline" {...props} />
)

export const ProfileScreen = () => {
    const [checked, setChecked] = React.useState(false);
    const [bru, setBru] = React.useState(false);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    const onBruChanged = (isChecked) => {
        setBru(isChecked);
    }

    return (
        <Layout style={styles.outerLayout}>
            <SafeAreaView>
                <View>
                    <Avatar style={styles.avatar} size='giant' source={require('../../assets/profile.png')} />
                    <Button accessoryLeft={plusIcon} status='success' style={styles.gear} />
                </View>
                <Text style={styles.name} >Linda Fabbri</Text>
                <Button accessoryLeft={pinIcon} status='basic' appearance='ghost' style={{ fontStyle: "italic" }}>Via Lovara 36, Vicenza</Button>
                <Divider style={styles.div} />
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Luoghi Visitati</Text>
                        <Text style={{ fontSize: 18 }}>768</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.subText}>Eventi Seguiti</Text>
                        <Text style={{ fontSize: 18 }}>89</Text>
                    </View>
                </View>
                <Divider style={styles.div} />
                <View>
                    <Card style={styles.dateCard}>
                        <Grid style={{ flex: 0, height: 50 }}>
                            <Row>
                                <Col>
                                    <Text style={styles.dateCardText}>Vibrazione</Text>
                                </Col>
                                <Col>
                                    <Toggle style={styles.toggle} checked={checked} onChange={onCheckedChange}></Toggle>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                    <Card style={styles.dateCard}>
                        <Grid style={{ flex: 0, height: 50 }}>
                            <Row>
                                <Col>
                                    <Text style={styles.dateCardText}>Notifiche</Text>
                                </Col>
                                <Col>
                                    <Toggle style={styles.toggle} checked={bru} onChange={onBruChanged}></Toggle>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                </View>
                <Button style={styles.button} status='danger'>
                    Log Out
                </Button>
            </SafeAreaView>
        </Layout>
    )
};

const styles = StyleSheet.create({
    avatar: {
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "12%",
        width: 200,
        height: 200
    },
    div: {
        margin: "5%",
        backgroundColor: "black",
        height: 2,
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    name: {
        textAlign: "center",
        fontSize: 30,
        marginTop: "6%",
        marginBottom: "2%",
        fontWeight: "bold"
    },
    button: {
        marginTop: 30,
        marginBottom: 100,
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    gear: {
        position: "absolute",
        bottom: 0,
        left: "60%",
        width: 10,
        height: 10,
        borderRadius: 50
    },
    dateCardText: {
        marginTop: "auto",
        marginBottom: "auto",
        paddingStart: "5%"
    },
    toggle: {
        marginTop: "auto",
        marginBottom: "auto"
    },
    dateCard: {
        padding: 0,
        backgroundColor: "rgba(255.0, 255.0, 255.0, 0.05)",
        borderRadius: 10,
        margin: 10,
        marginTop: 2,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        width: "80%",

        marginLeft: "auto",
        marginRight: "auto"
    },
    subContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        alignSelf: "center"
    },
    subText: {
        fontSize: 20,
        fontStyle: "italic"
    },
    outerLayout: {
        height: "100%"
    }
});