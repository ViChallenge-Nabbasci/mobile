import { Card, Layout, Text, Toggle } from '@ui-kitten/components';
import { Button, Datepicker, CheckBox } from '@ui-kitten/components';
import { DateIcon, SearchIcon, ArrowBackIcon, CheckmarkIcon } from "../icons";

import { ScrollView } from 'react-native';

import { Row, Col, Grid } from "react-native-easy-grid";

import { useState } from 'react';

export const HomeScreen = () => {
    const [tourPlannerToggled, setToggled] = useState(false);

    const openTourPlanner = () => {
        setToggled(tourPlanned => tourPlanned = !tourPlanned);
    }

    return (
        <Layout style={styles.layout}>
            {tourPlannerToggled === false ?
                <Button style={styles.searchButton}
                    accessoryLeft={SearchIcon}
                    size="giant"
                    onPress={openTourPlanner}
                >
                    <Text style={styles.buttonText}>
                        Cerca itinerario
                    </Text>
                </Button>
                :
                <TourPlanner toggler={openTourPlanner} />
            }
        </Layout>
    )
}

const TourPlanner = (props) => {
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

    return (
        <ScrollView>
            <Text
                style={styles.input}>
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
                        <Text style={styles.dateCardText}>Preferiresti solo luoghi gratuiti?</Text>
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
                            <Button style={styles.endButton} size="large" status="danger" accessoryLeft={ArrowBackIcon}>Indietro</Button>
                        </Col>
                        <Col>
                            <Button style={styles.endButton} size="large" status="success" accessoryRight={CheckmarkIcon}>Conferma</Button>
                        </Col></Row>
                </Grid>
            </Layout>
        </ScrollView>
    );
}

const styles = {
    layout: {
        flex: 1
    },
    searchButton: {
        borderRadius: 100,
        margin: 10,
        marginTop: 50
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
    }
};