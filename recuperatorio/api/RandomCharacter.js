import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getData(contador) {
        try{
          const response = await fetch("https://rickandmortyapi.com/api/character/" + contador);
          const json = await response.json();
          console.log(json);
          return json;
        }catch(e){
          console.error(e);
        }
      
}