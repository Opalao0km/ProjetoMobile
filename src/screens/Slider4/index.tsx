import { FlatList, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider, ComponentButtonInterface
} from '../../components';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native'
export function Slider4({ setPageI }: IPage) {
    const slide1Texts = [
        { id: '1', text: 'GPS com zonas de perigo evidenciadas por marcadores nas cores verde(seguro), amarelo(pouco perigoso) e vermelho(perigoso).'},
        { id: '2', text: 'Comparativo de preços e especificidades dos veículos.'},
    ]
    return (
        <View style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Segurança e economia' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
                <ComponentButtonInterface title= "Entrar" type ="primary" onPressI={() => {setPageI(5)}} />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(6)} cor={false}/>
            </View>
        </View>
    );

}