import { Card, Layout, Text, Toggle } from '@ui-kitten/components';
import { Button, Datepicker, CheckBox, Icon } from '@ui-kitten/components';
import { DateIcon, SearchIcon, ArrowBackIcon, CheckmarkIcon } from "../icons";

import { ScrollView, SafeAreaView, View,Linking } from 'react-native';

import { Row, Col, Grid } from "react-native-easy-grid";

import { useState } from 'react';

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import MyCarousel from '../c.jsx';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import { StatusBar } from 'expo-status-bar';

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

const pinIcon=(props)=>(
    <Icon name="pin-outline" {...props} />
  )
const heartIcon=(props)=>(
<Icon name="heart-outline" {...props} />
)


export const HomeScreen = (props) => {
    const openTourPlanner = () => {
        props.navigation.navigate("TourPlanner");
        props.navigation.pop
    }

    return (
        <ScrollView>
            <SafeAreaView>
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
                
                <View style={styles.container}>
                    <Text category='h6' style={styles.carouselHeader}>Attività all'Aperto</Text>
                    <View style={{
                        paddingVertical: 12,
                        width: '100%',
                        backgroundColor: '#fff',
                    }}>
                    <SimpleCarousel style={{height:500}}
                    data={[{
                        title: 'Giardino Salvi',
                        source: require('../../assets/giardinoSalvi.jpg'),
                        map:"https://goo.gl/maps/dPty1noXK4hpU7iE8"
                        },
                        {
                        title: 'Contrà Mure Porta Nova',
                        source: require('../../assets/portaNuova.jpg'),
                        map:"https://goo.gl/maps/8MjqDw8FuWQahk1B9"
                        },
                        {
                        title: 'Santuario di Santa Corona',
                        source: require('../../assets/santaCorona.jpg'),
                        map:"https://goo.gl/maps/4iGdcnPNgepZWm1U9"
                        }
                    ]} 
                    renderItem={(props, i, width) => {
                        return (
                            <>
                                <Banner id={`${props.title}_${i}`} source={props.source} width={width}  onPress={(id) => null} />
                                <View>
                                    <Text style={styles.textBanner}>{props.title}</Text>
                                    <Button style={styles.buttonBanner} accessoryLeft={pinIcon} onPress={()=>{Linking.openURL(props.map).catch(err => console.error("Couldn't load page", err))}}></Button>
                                    <Button style={styles.likeBanner} accessoryLeft={heartIcon}></Button>
                                </View>
                            </>
                        )
                    }} 
                    />
                </View>
                <StatusBar translucent={true} />
                </View>

                <View style={styles.container}>
                    <Text category='h6' style={styles.carouselHeader}>Musei per te</Text>
                    <View style={{
                        paddingVertical: 12,
                        width: '100%',
                        backgroundColor: '#fff',
                    }}>
                    <SimpleCarousel style={{height:500}}
                    data={[{
                        title: 'Villa la Rotonda',
                        source: require('../../assets/villaRondo.jpg'),
                        map:"https://g.page/villa-la-rotonda-vicenza?share"
                        },
                        {
                        title: 'Basilica Palladiana',
                        source: require('../../assets/basilicaPalladiana.jpg'),
                        map:"https://goo.gl/maps/Cduzd2eVEDGXFz9y9"
                        },
                        {
                        title: 'Castello Inferiore a Marostica',
                        source: require('../../assets/castelloMarostica.jpg'),
                        map:"https://goo.gl/maps/NGYjkbNMmhCLCBAe9"
                        }
                    ]} 
                    renderItem={(props, i, width) => {
                        return (
                            <>
                                <Banner id={`${props.title}_${i}`} source={props.source} width={width}  onPress={(id) => null} />
                                <View>
                                    <Text style={styles.textBanner}>{props.title}</Text>
                                    <Button style={styles.buttonBanner} accessoryLeft={pinIcon} onPress={()=>{Linking.openURL(props.map).catch(err => console.error("Couldn't load page", err))}}></Button>
                                    <Button style={styles.likeBanner} accessoryLeft={heartIcon}></Button>
                                </View>
                            </>
                        )
                    }} 
                    />
                </View>
                <StatusBar translucent={true} />
                </View>

                <View style={styles.container}>
                    <Text category='h6' style={styles.carouselHeader}>Ristoranti in base ai tuoi gusti</Text>
                    <View style={{
                        paddingVertical: 12,
                        width: '100%',
                        backgroundColor: '#fff',
                    }}>
                    <SimpleCarousel style={{height:500}}
                    data={[{
                        title: 'Ristorante Da Biasio',
                        source: require('../../assets/ristoranteBlasio.jpg'),
                        map: "https://www.google.com/maps/place/Ristorante+Da+Biasio/@45.5197587,11.5465239,15z/data=!4m5!3m4!1s0x0:0xb2e00ce5025588c5!8m2!3d45.5197572!4d11.5465343"
                        },
                        {
                        title: 'Ristorante "Il Ceppo"',
                        source: require('../../assets/ristoCeppo.jpg'),
                        map: "https://goo.gl/maps/SjW2SNKzNBqBAa5d8"
                        },
                        {
                        title: 'al Pastello',
                        source: require('../../assets/ristoPastello.jpg'),
                        map: "https://g.page/alpestello?share"
                        }
                    ]} 
                    renderItem={(props, i, width) => {
                        return (
                            <>
                                <Banner id={`${props.title}_${i}`} source={props.source} width={width}  onPress={(id) => null} />
                                <View>
                                    <Text style={styles.textBanner}>{props.title}</Text>
                                    <Button style={styles.buttonBanner} accessoryLeft={pinIcon} onPress={()=>{Linking.openURL(props.map).catch(err => console.error("Couldn't load page", err))}}></Button>
                                    <Button style={styles.likeBanner} accessoryLeft={heartIcon}></Button>
                                </View>
                            </>
                        )
                    }} 
                    />
                </View>
                <StatusBar translucent={true} />
                </View>
            </SafeAreaView>
        </ScrollView>
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

    return (
        <Layout>
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
                                    accessoryRight={CheckmarkIcon}>
                                    Conferma
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Layout>
            </ScrollView>

        </Layout>
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
    },
    container: {
        marginTop: "0%",
        marginBottom:"2%"
      },
    textBanner:{
        fontSize:18,
        padding:10,
        marginTop:10
        
    },
    carouselHeader:{
        fontSize:20,
        margin:"5%",
        marginBottom:"2%"
    },
    buttonBanner:{
        width:20,
        height:20,
        position:"absolute",
        right:0,
        borderRadius:50,
        margin:10,
        backgroundColor:"#17de14"
    },
    likeBanner:{
        width:20,
        height:20,
        backgroundColor:"#ff244c",
        position:"absolute",
        right:50,
        borderRadius:50,
        margin:10
    }
};

