import { Card, Layout, Text, Toggle } from '@ui-kitten/components';
import { Button, Datepicker, CheckBox } from '@ui-kitten/components';
import { DateIcon, SearchIcon, ArrowBackIcon, CheckmarkIcon } from "../icons";

import { View, ScrollView, Image } from 'react-native';

import { Row, Col, Grid } from "react-native-easy-grid";

import { useState } from 'react';

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { queryTour } from '../../api/api';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}>
            </Stack.Screen>
            <Stack.Screen name="TourPlanner" component={TourPlanner}
                options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}>
            </Stack.Screen>
            <Stack.Screen name="TourScreen" component={TourScreen}
                options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 2,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export const HomeScreen = (props) => {
    const openTourPlanner = () => {
        props.navigation.navigate("TourPlanner");
        props.navigation.pop
    }

    return (
        <Layout style={styles.layout}>
                <Button style={styles.searchButton}
                    accessoryLeft={SearchIcon}
                    size="giant"
                    onPress={openTourPlanner}
                >
                    <Text style={styles.buttonText}>
                        Cerca itinerario
                    </Text>
                </Button>
        </Layout>
    )
}

export const TourPlanner = (props) => {
    const [byCarState, setByCar] = useState(false);
    const [dateState, setDate] = useState(new Date());
    const [outForLunchState, setOutForLunch] = useState(false);
    const [outForDinnerState, setOutForDinner] = useState(false);
    const [hasDogState, setHasDog] = useState(false);
    const [freePlacesOnlyState, setFreePlacesOnly] = useState(false);
    const [interestsState, setInterests] = useState({
        parks: false,
        teathers: false,
        squares: false,
        trekking: false,
        museums: false,
        churches: false
    });

    const bakeCategories = () => {
        let categories = []

        if (interestsState.teathers === true) {
            categories.push("theater");
        }

        if (interestsState.trekking === true) {
            categories.push("trekking");
        }

        if (interestsState.museums === true) {
            categories.push("museum");
        }

        if (interestsState.churches === true) {
            categories.push("church");
        }

        if (interestsState.parks === true) {
            categories.push("park");
        }

        if (interestsState.squares === true) {
            categories.push("square");
        }

        return categories;
    }

    const doRequest = () => {
        queryTour(byCarState, outForLunchState, outForDinnerState,freePlacesOnlyState, hasDogState, dateState, bakeCategories())
            .then(resp => console.log(resp.data));
    }

    return (
        <View styles={styles.outerLayout}>
            <ScrollView>
            <Text style={styles.input}>
                Cosa vuoi fare?
            </Text>
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 50 }}>
                        <Row>
                            <Col>
                                <Text style={styles.dateCardText}>Data</Text>
                            </Col>
                            <Col>
                                <Datepicker
                                    accessoryLeft={DateIcon}
                                    placeholder=""
                                    date={dateState}
                                    onSelect={nextDate => setDate(nextDate)}
                                    size="large"
                                    style={styles.datepicker}
                                />
                            </Col></Row>
                    </Grid>
                </Card>
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 50 }}>
                        <Row>
                            <Col>
                                <Text style={styles.dateCardText}>Hai un'automobile?</Text>
                            </Col>
                            <Col>
                                <Toggle style={styles.toggle} checked={byCarState} onChange={(checked) => setByCar(checked)}></Toggle>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 100 }}>
                        <Row>
                            <Col>
                                <Text style={styles.dateCardText}>Pranzi fuori?</Text>
                            </Col>
                            <Col>
                                <Toggle style={styles.toggle} checked={outForLunchState} onChange={(checked) => setOutForLunch(checked)}></Toggle>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.dateCardText}>Ceni fuori?</Text>
                            </Col>
                            <Col>
                                <Toggle style={styles.toggle} checked={outForDinnerState} onChange={(checked) => setOutForDinner(checked)}></Toggle>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 50 }}>
                        <Row>
                            <Col>
                                <Text style={styles.dateCardText}>Hai un cane?</Text>
                            </Col>
                            <Col>
                                <Toggle style={styles.toggle} checked={hasDogState} onChange={(checked) => setHasDog(checked)}></Toggle>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 50 }}>
                        <Row>
                            <Col>
                                <Text style={styles.dateCardText}>Preferiresti solo luoghi gratuiti?</Text>
                            </Col>
                            <Col>
                                <Toggle style={styles.toggle} checked={freePlacesOnlyState} onChange={(checked) => setFreePlacesOnly(checked)}></Toggle>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 300 }}>
                        <Row>
                            <Text style={styles.dateCardText}>Dove preferiresti andare?</Text>
                        </Row>
                        <Row>
                            <CheckBox
                                checked={interestsState.parks}
                                onChange={(b) => setInterests({ ...interestsState, parks: b })}>
                                Parchi
                            </CheckBox>
                        </Row>
                        <Row>
                            <CheckBox
                                checked={interestsState.squares}
                                onChange={(b) => setInterests({ ...interestsState, squares: b })}>
                                Piazze
                            </CheckBox>
                        </Row>
                        <Row>
                            <CheckBox
                                checked={interestsState.trekking}
                                onChange={(b) => setInterests({ ...interestsState, trekking: b })}>
                                Camminate o trekking
                            </CheckBox>
                        </Row>
                        <Row>
                            <CheckBox
                                checked={interestsState.teathers}
                                onChange={(b) => setInterests({ ...interestsState, teathers: b })}>
                                Teatri
                            </CheckBox>
                        </Row>
                        <Row>
                            <CheckBox
                                checked={interestsState.museums}
                                onChange={(b) => setInterests({ ...interestsState, museums: b })}>
                                Musei
                            </CheckBox>
                        </Row>
                        <Row>
                            <CheckBox
                                checked={interestsState.churches}
                                onChange={(b) => setInterests({ ...interestsState, churches: b })}>
                                Chiese
                            </CheckBox>
                        </Row>
                    </Grid>
                </Card>
                <Layout>
                    <Grid style={{ flex: 0, height: 90 }}>
                        <Row>
                            <Col>
                                <Button style={styles.endButton}
                                    size="large"
                                    status="danger"
                                    accessoryLeft={ArrowBackIcon}
                                    onPress={() => props.navigation.goBack()}
                                >
                                    Indietro
                                </Button>
                            </Col>
                            <Col>
                                <Button style={styles.endButton}
                                    size="large"
                                    status="success"
                                    onPress={() => doRequest()}
                                    accessoryRight={CheckmarkIcon}>
                                    Conferma
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Layout>
            </ScrollView>
        </View>
    );
}

const TourScreen = (props) => {
    let dummy = {
        "id": 0,
        "name": "Villaggio Preistorico del Monte Corgnon",
        "opening_times": [
            "00:10:00",
            "00:10:00",
            "00:10:00",
            "00:10:00",
            "00:10:00",
            "00:10:00",
            "00:10:00"
        ],
        "closing_times": [
            "00:19:00",
            "00:19:00",
            "00:19:00",
            "00:19:00",
            "00:19:00",
            "00:19:00",
            "00:19:00"
        ],
        "phone": "0424407264",
        "price": 4,
        "durata": 1,
        "address": "",
        "notes": "",
        "category": "museum",
        "outside": true,
        "with_pets": true
    };

    let paramsList = [...Array(50).keys()].map(_ => dummy);

    return (
        <>
            <Text style={styles.input}>Il tuo itinerario</Text>
            <ScrollView>
                {paramsList.map(item =>
                (
                <Card style={styles.dateCard}>
                    <Grid style={{ flex: 0, height: 150 }}>
                        <Row>
                            <Col size={40}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }}
                                />
                            </Col>
                            <Col size={60}>
                                <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text></Row>
                                <Row size={20}><Text style={styles.tourCardText}>{item.opening_times[0]} - {item.closing_times[0]} ({item.durata} ora)</Text></Row>
                                <Row size={20}><Text style={styles.tourCardText}>{item.category}</Text></Row>
                            </Col>
                        </Row>
                    </Grid>
                </Card>
                ))
                }
            </ScrollView>
        </>
    )
}

const styles = {
    layout: {
        flex: 1
    },
    tinyLogo: {
        width: 100,
        height: 100,
        marginTop: "auto",
        marginBottom: "auto",
    },
    searchButton: {
        borderRadius: 100,
        margin: 10,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonText: {
        fontSize: "20pt",
    },
    input: {
        marginTop: 50,
        margin: 10,
        fontSize: 30,
        marginLeft: "auto",
        marginRight: "auto",
    },
    datepicker: {
        marginLeft: "auto",
    },
    dateCardText: {
        marginTop: "auto",
        marginBottom: "auto",
    },
    dateCard: {
        padding: 0,
        backgroundColor: "rgba(255.0, 255.0, 255.0, 0.05)",
        borderRadius: 10,
        margin: 10,
        marginTop: 2,
    },
    toggle: {
        marginTop: "auto",
        marginBottom: "auto"
    },
    endButton: {
        margin: 10,
    },
    tourCardText: {
        marginRight: "auto",
        fontSize: 12
    },
    tourCardTextTitle: {
        fontSize: 15,
        marginTop: "auto",
        marginBottom: "auto",
    },
    outerLayout: {
        height: "100%"
    }
};