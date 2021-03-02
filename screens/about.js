import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/global';

export default function About() {
    const { container, titleText } = globalStyles;
    const { aboutContent } = styles;
    return (
        <ScrollView>
            <View style={container}>
                <Text style={titleText}>About the Reviews App</Text>
                <Text style={aboutContent}>
                    Ullamco in cupidatat qui nostrud quis est nulla laborum do consectetur enim qui. Deserunt proident nisi eu sit do dolore ut. Eu sunt irure excepteur nisi consectetur et labore ut et proident cupidatat. Voluptate exercitation tempor consequat dolore ut nulla labore eu anim amet tempor enim Lorem.
                    Consectetur velit nulla enim id fugiat nostrud sunt nisi ullamco et irure incididunt pariatur. Quis non qui fugiat cillum nulla qui nulla ullamco occaecat. Tempor est ad ea reprehenderit ex Lorem consectetur mollit dolore mollit ipsum quis laboris.
                    Irure ad aliquip irure exercitation enim. Eu mollit excepteur amet do Lorem veniam fugiat proident amet laboris elit. Excepteur sint reprehenderit id ullamco aliqua. Elit magna reprehenderit velit sint nostrud voluptate voluptate quis. In est ex culpa sint sit irure dolore sunt.
                    Irure tempor tempor esse ut aliqua duis veniam duis nisi elit esse ipsum. Laborum veniam aliquip Lorem nostrud enim. Sit ipsum consectetur quis pariatur sunt ad. Consectetur ipsum non aliquip aliqua veniam do ea in deserunt. Laborum aliqua ad amet adipisicing reprehenderit. Laboris pariatur eiusmod culpa enim culpa esse. Elit ad velit dolor aute commodo minim ullamco velit amet eiusmod amet.
                    Veniam non aliqua eu non eu qui. Ipsum laborum reprehenderit sunt dolore id occaecat Lorem aliqua mollit. Nisi non irure quis velit exercitation cupidatat ullamco. Magna voluptate dolor Lorem cupidatat laborum dolore voluptate duis officia occaecat quis. Lorem consectetur pariatur Lorem et reprehenderit excepteur. Veniam mollit incididunt pariatur elit est consequat. Non ad ad in mollit voluptate anim id laborum cillum velit incididunt mollit voluptate.
                    Quis eu et amet duis esse ea proident anim. Veniam ad adipisicing culpa cupidatat pariatur adipisicing. Magna amet consequat laboris adipisicing velit et ea cillum aliquip. Sit id commodo culpa aute ex commodo officia. Laboris esse ea elit culpa cupidatat amet officia. Et tempor ex incididunt incididunt et commodo enim.
                    Eiusmod aliqua elit do ad cupidatat laborum ex anim anim. Nisi deserunt minim ex eu proident exercitation cupidatat do. Laborum anim fugiat aliqua veniam esse enim incididunt consectetur anim id ex tempor laboris laboris. Minim excepteur nostrud quis commodo. Sint mollit nisi voluptate dolore laboris amet incididunt dolor irure aliqua velit magna qui. Id incididunt aute labore laborum eu do et.
                    Enim eu Lorem id mollit duis commodo officia labore reprehenderit aute. Eu laboris occaecat aute quis ipsum consectetur dolore elit eu aliqua. Dolor sint id velit occaecat commodo quis elit fugiat eiusmod adipisicing. Velit mollit nisi proident do.
                    Irure ut duis dolor voluptate irure tempor. Est in sint nulla nulla commodo exercitation id ipsum mollit esse dolor. Ad officia cupidatat veniam ipsum. Laborum consectetur eiusmod nulla et ullamco cupidatat. Excepteur sunt excepteur labore id esse amet veniam magna. Exercitation Lorem proident consequat minim pariatur.
                    Deserunt nostrud cillum commodo culpa occaecat cupidatat sit culpa dolor sit incididunt. Ut consequat culpa adipisicing culpa velit et aliquip sint ullamco dolor ipsum dolor non labore. Consequat labore deserunt nulla nisi. Lorem nisi culpa do nisi nulla consequat esse aliquip fugiat labore sit dolore. Magna dolore pariatur qui dolore enim aliqua culpa non pariatur. Ea nisi occaecat sunt pariatur excepteur anim.
                    Anim dolor nostrud eu excepteur est. Et anim aliquip irure occaecat velit ipsum amet ad anim ea aute nisi sit labore. Velit duis sit qui sunt irure. Duis laborum officia incididunt irure incididunt occaecat. Velit minim commodo officia pariatur duis ex sit aliquip. Aliquip reprehenderit sint anim eu et amet Lorem.
                    Elit magna minim proident elit dolore pariatur reprehenderit esse veniam est sit proident nisi. Lorem sunt enim labore sunt ipsum esse. Voluptate in commodo dolor sint adipisicing labore nostrud deserunt occaecat exercitation incididunt cupidatat. Eiusmod duis deserunt laborum sunt sit labore proident incididunt.
                </Text>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    aboutContent: {
        marginTop: 20,
    },
});