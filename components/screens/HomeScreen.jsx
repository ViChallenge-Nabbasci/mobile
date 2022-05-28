import { Card, Divider, Layout, Text, Toggle } from '@ui-kitten/components';
import { Button, Datepicker, CheckBox, Icon } from '@ui-kitten/components';
import { DateIcon, SearchIcon, ArrowBackIcon, CheckmarkIcon, PhoneIcon, CloseIcon, SaveIcon } from "../icons";
import { ScrollView, SafeAreaView, View, Linking, StyleSheet } from 'react-native';
import { Image, ImageBackground } from 'react-native';
import { Row, Col, Grid } from "react-native-easy-grid";
import { useEffect, useState } from 'react';
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { queryTour } from '../../api/api';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tail = ([a, ...b]) => b;

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
            <Stack.Screen name="PlaceScreen" component={PlaceScreen}
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

const pinIcon = (props) => (
    <Icon name="pin-outline" {...props} />
)
const heartIcon = (props) => (
    <Icon name="heart-outline" {...props} />
)


export const HomeScreen = (props) => {
    const openTourPlanner = () => {
        props.navigation.navigate("TourPlanner");
        props.navigation.pop
    }

    useEffect(() => {
        AsyncStorage.setItem("savedTours", JSON.stringify([]));
    });

    return (
        <Layout style={styles.outerLayout}>
            <Grid>
                <Row size={15}>
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
                </Row>
                <Row size={85}>
                    <ScrollView>
                        <SafeAreaView>
                            <View style={styles.container}>
                                <Text category='h6' style={styles.carouselHeader}>Attività all'Aperto</Text>
                                <View style={{
                                    paddingVertical: 12,
                                    width: '100%',
                                    backgroundColor: '#fff',
                                }}>
                                    <SimpleCarousel style={{ height: 500 }}
                                        data={[{
                                            title: 'Giardino Salvi',
                                            source: require('../../assets/giardinoSalvi.jpg'),
                                            map: "https://goo.gl/maps/dPty1noXK4hpU7iE8"
                                        },
                                        {
                                            title: 'Contrà Mure Porta Nova',
                                            source: require('../../assets/portaNuova.jpg'),
                                            map: "https://goo.gl/maps/8MjqDw8FuWQahk1B9"
                                        },
                                        {
                                            title: 'Santuario di Santa Corona',
                                            source: require('../../assets/santaCorona.jpg'),
                                            map: "https://goo.gl/maps/4iGdcnPNgepZWm1U9"
                                        }
                                        ]}
                                        renderItem={(props, i, width) => {
                                            return (
                                                <>
                                                    <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => null} />
                                                    <View>
                                                        <Text style={styles.textBanner}>{props.title}</Text>
                                                        <Button style={styles.buttonBanner} accessoryLeft={pinIcon} onPress={() => { Linking.openURL(props.map).catch(err => console.error("Couldn't load page", err)) }}></Button>
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
                                    <SimpleCarousel style={{ height: 500 }}
                                        data={[{
                                            title: 'Villa la Rotonda',
                                            source: require('../../assets/villaRondo.jpg'),
                                            map: "https://g.page/villa-la-rotonda-vicenza?share"
                                        },
                                        {
                                            title: 'Basilica Palladiana',
                                            source: require('../../assets/basilicaPalladiana.jpg'),
                                            map: "https://goo.gl/maps/Cduzd2eVEDGXFz9y9"
                                        },
                                        {
                                            title: 'Castello Inferiore a Marostica',
                                            source: require('../../assets/castelloMarostica.jpg'),
                                            map: "https://goo.gl/maps/NGYjkbNMmhCLCBAe9"
                                        }
                                        ]}
                                        renderItem={(props, i, width) => {
                                            return (
                                                <>
                                                    <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => null} />
                                                    <View>
                                                        <Text style={styles.textBanner}>{props.title}</Text>
                                                        <Button style={styles.buttonBanner} accessoryLeft={pinIcon} onPress={() => { Linking.openURL(props.map).catch(err => console.error("Couldn't load page", err)) }}></Button>
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
                                    <SimpleCarousel style={{ height: 500 }}
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
                                                    <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => null} />
                                                    <View>
                                                        <Text style={styles.textBanner}>{props.title}</Text>
                                                        <Button style={styles.buttonBanner} accessoryLeft={pinIcon} onPress={() => { Linking.openURL(props.map).catch(err => console.error("Couldn't load page", err)) }}></Button>
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
                </Row>
            </Grid>
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

    const doRequest = async () => {
        queryTour(byCarState, outForLunchState, outForDinnerState, freePlacesOnlyState, hasDogState, dateState, bakeCategories())
            .then(async data => {
                await AsyncStorage.setItem("usertour", JSON.stringify(data.data));
                let item = await AsyncStorage.getItem("usertour");
                console.log("Item", item);
                props.navigation.navigate("TourScreen");
            });

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

const PlaceScreen = (props) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("pressedItem").then(value => {
            let temp = JSON.parse(value);
            console.log("closing time", temp.closing_times);
            setItem(temp);
        });
    }, []);

    const doPhoneCall = () => {
        Linking.openURL(`tel:${item.phone}`);
    }

    return (
        <>
            {item !== null ?
            <>
                <Text style={styles.input}>
                    {item.name}
                </Text>
                <Image
                    style={styles.bigLogo}
                    source={{
                        uri: item.img,
                    }}>
                    </Image>
                <Divider></Divider>
                <Card style={styles.timeCard}>
                    <Text style={{ marginLeft:"auto", marginRight:"auto", fontSize: 25, marginBottom: 5}}>
                        Orari
                    </Text>
                    { item.opening_times.map((time, i) => {
                        let component = <Text style={styles.infoTime}>{time} - {item.closing_times[i]}</Text>;
                        if (time === "00:00:00") {
                            return <Text style={styles.infoTime}>Chiuso</Text>
                        } else return component;
                    })} 
                </Card>
                { item.phone !== "" ?
                    <Button onPress={doPhoneCall} style={styles.callButton} accessoryLeft={PhoneIcon} status="success" size="giant">Chiama</Button>
                : null}
                <Button style={styles.buttonLocation}
                    accessoryLeft={pinIcon}
                    onPress={() => { Linking.openURL(item.location).catch(err => console.error("Couldn't load page", err)) }}
                    size="giant"
                >
                    Scopri Posizione
                </Button>
                <Button style={styles.buttonLocation } status="danger" size="giant" accessoryLeft={heartIcon}>Mi Piace</Button>
            </>
            : null}
        </>
    );
}

const TourScreen = (props) => {
    const [items, setItems] = useState({
        morning: [],
        lunch: [],
        afternoon: [],
        afternoon2: [],
        dinner: [],
        night: [],
    });

    useEffect(() => {
        AsyncStorage.getItem("usertour").then(item => {
            let localItems = JSON.parse(item);
            let afternoon2 = tail(localItems.afternoon).filter(i => i.durata >= 1 && i.durata <= 2);
            setItems(s => s = {...localItems, afternoon2: afternoon2});
        })
    }, []);

    const onClickItem = async (item) => {
        await AsyncStorage.setItem("pressedItem", JSON.stringify(item));
        props.navigation.navigate("PlaceScreen");
    }

    return (
        <>
            <Text style={styles.input}>Il tuo itinerario</Text>
            <ScrollView>
                { items.morning.length > 0 ? <Text style={styles.tourHeader}>10:00</Text> : null}
                { items.morning.length > 0 ? [items.morning[0]].map(item =>
                (
                    <Card style={styles.dateCard} onPress={() => onClickItem(item)}>
                        <Grid style={{ flex: 0, height: 150 }}>
                            <Row>
                                <Col size={40}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.img,
                                        }}
                                    />
                                </Col>
                                <Col size={60}>
                                    <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text>
                                        <Button style={{...styles.likeBanner, marginRight: -50}}
                                            onPress={() => {
                                                setItems({ ...items, morning: tail(items.morning) })
                                            }}
                                            status="danger" accessoryLeft={CloseIcon}></Button>
                                    </Row>
                                    <Row size={20}>
                                        <Text style={styles.tourCardText}>Durata: {item.durata} ora</Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                ))
                : null}
                { items.lunch.length > 0 ? <Text style={styles.tourHeader}>12:00</Text> : null}
                { items.lunch.length > 0 ? [items.lunch[0]].map(item =>
                (
                    <Card style={styles.dateCard} onPress={() => onClickItem(item)}>
                        <Grid style={{ flex: 0, height: 150 }}>
                            <Row>
                                <Col size={40}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.img,
                                        }}
                                    />
                                </Col>
                                <Col size={60}>
                                    <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text>
                                        <Button style={{...styles.likeBanner, marginRight: -50}}
                                            onPress={() => {
                                                setItems({ ...items, lunch: tail(items.lunch) })
                                            }}
                                            status="danger" accessoryLeft={CloseIcon}></Button>
                                    </Row>
                                    <Row size={20}>
                                        <Text style={styles.tourCardText}>Durata: {item.durata} ora</Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                ))
                 : null}
                { items.afternoon.length > 0 ? <Text style={styles.tourHeader}>15:00</Text> : null}
                { items.afternoon.length > 0 ? [items.afternoon[0]].map(item =>
                (
                    <Card style={styles.dateCard} onPress={() => onClickItem(item)}>
                        <Grid style={{ flex: 0, height: 150 }}>
                            <Row>
                                <Col size={40}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.img,
                                        }}
                                    />
                                </Col>
                                <Col size={60}>
                                    <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text>
                                        <Button style={{...styles.likeBanner, marginRight: -50}}
                                            onPress={() => {
                                                setItems({ ...items, afternoon: tail(items.afternoon) })
                                            }}
                                            status="danger" accessoryLeft={CloseIcon}></Button>
                                    </Row>
                                    <Row size={20}>
                                        <Text style={styles.tourCardText}>Durata: {item.durata} ora</Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>)
                )
                 : null}
                { items.afternoon2.length > 0 ? <Text style={styles.tourHeader}>17:00</Text> : null}
                { items.afternoon2.length > 0 ? [items.afternoon2[0]].map(item =>
                (
                    <Card style={styles.dateCard} onPress={() => onClickItem(item)}>
                        <Grid style={{ flex: 0, height: 150 }}>
                            <Row>
                                <Col size={40}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.img,
                                        }}
                                    />
                                </Col>
                                <Col size={60}>
                                    <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text>
                                        <Button style={{...styles.likeBanner, marginRight: -50}}
                                            onPress={() => {
                                                setItems({ ...items, afternoon2: tail(items.afternoon2) })
                                            }}
                                            status="danger" accessoryLeft={CloseIcon}></Button>
                                    </Row>
                                    <Row size={20}>
                                        <Text style={styles.tourCardText}>Durata: {item.durata} ora</Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>)
                )
                 : null}
                { items.dinner.length > 0 ? <Text style={styles.tourHeader}>19:00</Text> : null}
                { items.dinner.length > 0 ? [items.dinner[0]].map(item =>
                (
                    <Card style={styles.dateCard} onPress={() => onClickItem(item)}>
                        <Grid style={{ flex: 0, height: 150 }}>
                            <Row>
                                <Col size={40}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.img,
                                        }}
                                    />
                                </Col>
                                <Col size={60}>
                                    <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text>
                                        <Button style={{...styles.likeBanner, marginRight: -50}}
                                            onPress={() => {
                                                setItems({ ...items, dinner: tail(items.dinner) })
                                            }}
                                            status="danger" accessoryLeft={CloseIcon}></Button>
                                    </Row>
                                    <Row size={20}>
                                        <Text style={styles.tourCardText}>Durata: {item.durata} ora</Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                ))
                 : null}
                { items.night.length > 0 ? <Text style={styles.tourHeader}>21:00</Text> : null}
                { items.night.length > 0 ? [items.night[0]].map(item =>
                (
                    <Card style={styles.dateCard} onPress={() => onClickItem(item)}>
                        <Grid style={{ flex: 0, height: 150 }}>
                            <Row>
                                <Col size={40}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: item.img,
                                        }}
                                    />
                                </Col>
                                <Col size={60}>
                                    <Row size={60}><Text style={styles.tourCardTextTitle}>{item.name}</Text>
                                        <Button style={{...styles.likeBanner, marginRight: -50}}
                                            onPress={() => {
                                                setItems({ ...items, night: tail(items.night) })
                                            }}
                                            status="danger" accessoryLeft={CloseIcon}></Button>
                                    </Row>
                                    <Row size={20}>
                                        <Text style={styles.tourCardText}>Durata: {item.durata} ora</Text>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Card>
                ))
                 : null}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1
    },
    tinyLogo: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginTop: "auto",
        marginBottom: "auto",
    },
    searchButton: {
        borderRadius: 100,
        margin: 10,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30
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
        backgroundColor:'#FFF',
    },
    toggle: {
        marginTop: "auto",
        marginBottom: "auto"
    },
    endButton: {
        margin: 10,
        borderRadius: 100
    },
    container: {
        marginTop: "0%",
        marginBottom: "2%"
    },
    textBanner: {
        fontSize: 18,
        padding: 10,
        marginTop: 10

    },
    carouselHeader: {
        fontSize: 20,
        margin: "5%",
        marginBottom: "2%"
    },
    buttonBanner: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 0,
        borderRadius: 50,
        margin: 10,
        backgroundColor: "#17de14"
    },
    likeBanner: {
        width: 20,
        height: 20,
        backgroundColor: "#ff244c",
        position: "absolute",
        right: 50,
        borderRadius: 50,
        margin: 10
    },
    tourCardText: {
        marginRight: "auto",
        fontSize: 12,
        marginTop: -10,
    },
    tourCardTextTitle: {
        fontSize: 15,
        marginTop: "auto",
        marginBottom: "auto",
    },
    outerLayout: {
        height: "100%"
    },
    carouselHeader: {
        margin: 10,
        backgroundColor: "white",
        marginLeft: "auto",
        marginRight: "auto"
    },
    tourHeader: {
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: 20,
        margin: 10
    },
    bigLogo: {
        width: 250,
        height: 250,
        borderRadius: 20,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30
    },
    info: {
        fontSize: 17,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
    },
    infoTime: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: "auto",
        marginRight: "auto",
    },
    timeCard: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        borderRadius: 10,
        marginTop: 20
    },
    callButton: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 100,
        marginTop: 20
    },
    buttonLocation: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 100,
        marginTop: 20
    }
});

