import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Dimensions, Animated, Text, TouchableOpacity,Image   } from 'react-native';
import Svg, { Path, G, Circle, Defs, ClipPath, Rect, Filter , FeFlood,FeColorMatrix, FeOffset,FeGaussianBlur,FeComposite,FeBlend,Pattern,} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

 
export default function App() {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Home');
  };  
  const windowWidth = Dimensions.get('window').width;
  const pageWidth = windowWidth;
  const pages = [
    (
      <View style={styles.pageContent} key={1}>
 
    
<View>
<Text style={{
  color: '#3849F6',
  fontSize: 17,
  fontWeight: 500,
  top: -55,
  textAlign: 'center',
  maxWidth: '80%',  
  marginLeft: 'auto',  
  marginRight: 'auto',  
}}>
 Tanaman obat telah menjadi teman setia manusia sejak zaman kuno, memberikan kesehatan dan penyembuhan alami.
</Text>
 
</View>
</View>
    ),
    (
      <View style={styles.pageContent} key={2}>
       <Svg width="255" height="255" viewBox="0 0 255 255" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{top:'-15%', left:'1%' }}>
<G id="drawkit-server-woman-colour 1">
<Path id="Vector" d="M170.904 215.968L147.363 176.357" stroke="#ED7562" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_2" d="M181.113 215.968L157.572 176.357" stroke="#ED7562" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_3" d="M105.966 215.968L129.503 176.357" stroke="#ED7562" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_4" d="M160.082 92.8875H194.886L171.512 177.599H112.214V174.582H156.191L160.082 92.8875Z" fill="#ED7562"/>
<Path id="Vector_5" d="M108.346 212.911L101.748 213.937L102.665 219.833L109.262 218.806L108.346 212.911Z" fill="#DE8E68"/>
<Path id="Vector_6" d="M69.5 209.181L63.9004 205.544L60.6507 210.549L66.2503 214.185L69.5 209.181Z" fill="#DE8E68"/>
<Path id="Vector_7" d="M91.4602 148.483C86.5875 148.483 62.2677 205.104 62.2677 207.172C62.2677 209.241 67.5461 211.588 68.325 211.588C69.5386 210.462 92.8188 176.81 95.2424 174.462C97.6661 172.114 91.4602 148.483 91.4602 148.483Z" fill="#4B565D"/>
<Path id="Vector_8" d="M130.158 106.904C128.557 107.408 120.739 114.106 119.373 122.153C117.982 121.986 109.635 121.638 106.157 121.497C105.02 119.725 102.625 118.497 99.8465 118.497C95.9737 118.497 92.8328 120.877 92.8328 123.812C92.8328 123.877 92.8328 123.939 92.8328 124.004H106.835C106.835 123.939 106.835 123.877 106.835 123.812C106.83 123.07 106.63 122.343 106.255 121.703L118.421 123.642L132.872 125.145L134.361 112.523L130.158 106.904Z" fill="#D37C59"/>
<Path id="Vector_9" d="M142.157 97.9376C142.157 96.9196 139.621 95.7639 137.759 95.7639C132.788 95.7639 124.38 104.821 124.38 105.958C124.38 107.096 130.434 112.161 135.085 112.465C139.737 112.769 142.157 97.9376 142.157 97.9376Z" fill="#A1B9C8"/>
<Path id="Vector_10" d="M154.504 90.6775C182.598 90.6775 176.179 154.145 172.618 156.826C169.056 159.507 137.839 159.753 135.806 157.072C133.774 154.392 121.163 90.6775 154.504 90.6775Z" fill="#B9CDD9"/>
<Path id="Vector_11" d="M159.441 78.5375H148.211V93.5829C148.211 95.9704 159.441 95.9885 159.441 93.5829V78.5375Z" fill="#D37C59"/>
<Path id="Vector_12" d="M162.639 72.8382C164.074 63.8382 160.33 55.7597 154.276 54.7943C148.222 53.829 142.151 60.3423 140.716 69.3423C139.281 78.3424 143.025 86.4209 149.079 87.3862C155.133 88.3516 161.204 81.8382 162.639 72.8382Z" fill="#DE8E68"/>
<Path id="Vector_13" d="M178.016 46.7693C183.45 46.7693 188.885 49.6675 195.768 49.6675C201.202 49.6675 206.274 47.4938 212.795 47.4938C224.388 47.4938 228.011 55.1017 228.011 59.8114C228.011 71.7666 218.229 76.4762 210.984 76.4762C199.391 76.4762 197.942 68.5061 184.175 68.5061C170.771 68.5061 172.582 57.6377 169.684 57.6377C168.235 57.6377 167.329 57.8188 166.786 58.3622C166.242 58.9057 163.525 56.9131 163.525 56.1886C163.525 55.464 167.148 46.7693 178.016 46.7693Z" fill="black"/>
<Path id="Vector_14" d="M153.743 50.7543C140.929 50.7543 138.249 60.5032 138.249 63.3181C138.249 66.133 140.027 68.2198 140.937 68.2886C141.502 64.923 144.197 60.2786 144.324 60.1735C145.049 60.8981 147.733 63.2239 150.483 63.4341C152.773 63.5517 154.997 64.2445 156.949 65.4483C157.111 66.3845 157.464 67.2774 157.986 68.0712C158.727 69.2655 159.847 70.1774 161.166 70.6615C161.488 71.4706 161.673 72.3277 161.713 73.1975C161.713 77.0667 161.351 78.6317 160.989 79.7185C166.894 79.7185 169.684 73.6359 169.684 65.9519C169.684 53.3011 158.489 50.7543 153.743 50.7543Z" fill="black"/>
<Path id="Vector_15" d="M161.694 76.4036C163.423 76.4036 164.824 75.0022 164.824 73.2735C164.824 71.5448 163.423 70.1434 161.694 70.1434C159.966 70.1434 158.564 71.5448 158.564 73.2735C158.564 75.0022 159.966 76.4036 161.694 76.4036Z" fill="#DE8E68"/>
<Path id="Vector_16" d="M151.208 114.106C149.943 114.41 144.875 117.551 141.835 122.971C138.847 122.413 126.688 119.374 115.896 119.374C114.882 119.374 112.248 118.54 111.187 118.54C104.857 118.54 103.535 121.96 103.535 122.971C103.535 123.982 103.753 124.011 103.948 124.011C125.685 124.011 131.152 133.18 143.379 133.18C147.335 133.18 155.49 130.314 160.406 122.975C158.681 117.127 151.208 114.106 151.208 114.106Z" fill="#DE8E68"/>
<Path id="Vector_17" d="M172.574 101.752C179.364 108.342 162.195 126.583 159.442 126.315C156.688 126.047 146.762 115.595 146.668 112.418C146.574 109.241 166.014 95.38 172.574 101.752Z" fill="#A1B9C8"/>
<Path id="Vector_18" d="M186.528 124.822H33.2007V129.771H186.528V124.822Z" fill="#FD8369"/>
<Path id="Vector_19" d="M172.556 159.982C172.556 158.424 172.828 156.62 171.857 156.218C148.808 146.715 115.066 145.483 109.867 145.483C104.668 145.483 89.467 146.012 89.467 150.363C89.467 166.079 98.2233 214.461 100.002 216.269C100.846 217.12 108.208 216.552 109.124 215.631C109.063 211.646 111.378 171.618 109.266 166.771C128.637 173.871 150.634 177.233 156.431 177.233C173.23 177.215 172.556 161.829 172.556 159.982Z" fill="#626F77"/>
<Path id="Vector_20" d="M66.8025 213.439L60.9553 209.541L45.2179 206.245L43.7217 208.715L62.2668 220.182L66.8025 213.439Z" fill="black"/>
<Path id="Vector_21" d="M109.809 217.251L102.872 218.341L89.058 226.572L89.6304 229.409L111.041 225.286L109.809 217.251Z" fill="black"/>
<Path id="Vector_22" d="M178.291 203.575V128.387" stroke="#FD8369" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_23" d="M50.8954 203.575V128.387" stroke="#FD8369" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_24" d="M167.524 218.642V128.387" stroke="#FD8369" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_25" d="M39.5204 218.642V128.387" stroke="#FD8369" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_26" d="M116.439 215.968L139.976 176.357" stroke="#ED7562" stroke-width="1.44912" stroke-linecap="round" stroke-linejoin="round"/>
<Path id="Vector_27" d="M114.924 123.913H89.467V124.822H114.924V123.913Z" fill="#74D5DE"/>
<Path id="Vector_28" d="M116.809 64.6478H61.2277V105.009H116.809V64.6478Z" fill="#74D5DE"/>
<Path id="Vector_29" d="M81.2105 97.4194L73.5447 124.822H86.9816L94.4229 97.4194H81.2105Z" fill="#56CAD8"/>
<Circle id="Ellipse 25" cx="197.046" cy="173.139" r="49.2614" fill="#E2F5FF" fill-opacity="0.57"/>
<Circle id="Ellipse 26" cx="49.2616" cy="41.2926" r="11.5909" fill="#E2F5FF"/>
<Circle id="Ellipse 27" cx="104.318" cy="28.9773" r="18.1108" fill="#E2F5FF"/>
<Circle id="Ellipse 28" cx="15.5751" cy="117.72" r="5.43324" fill="#E2F5FF"/>
</G>
</Svg>
<View>
<Text style={{color: '#3849F6',
fontSize: 20,
fontWeight: 600,
top:-90,}}>Aktivitasmu Semakin Lancar</Text>
</View>      
<View>
<Text style={{
  color: '#3849F6',
  fontSize: 17,
  fontWeight: 500,
  top: -75,
  textAlign: 'center',
  maxWidth: '80%',  
  marginLeft: 'auto',  
  marginRight: 'auto',  
}}>
   Aktivitasmu semakin lancar tanpa harus mikir cucian numpuk. Dengan DISAYA Laundry semua cucianmu teratasi.
</Text>

</View>
      </View>
    ),
    (
      <View style={styles.pageContent} key={3}>
        <Svg width="206" height="206" viewBox="0 0 206 206" fill="none" xmlns="http://www.w3.org/2000/svg"
         style={{top:'-15%', left:'1%' }}>
<G id="drawkit-list-app-colour 1">
<Path id="Vector 19" d="M176.39 63.7476C160.023 31.5869 124.933 72.5571 112.037 101.715C112.037 83.6 112.037 57.4197 91.2061 60.3975C65.1673 64.1198 86.7423 98.3651 49.172 90.9205C11.6017 83.4759 15.3215 114.371 32.4327 159.411C49.544 204.451 72.9789 160.9 138.448 184.35C203.917 207.801 151.839 134.099 188.294 150.105C224.748 166.111 196.849 103.949 176.39 63.7476Z" fill="#E2F5FF"/>
<G id="Vector">
<Path id="Vector_2" d="M77.9367 90.4683C77.5933 91.6699 72.1 120.682 81.5417 147.633C83.0867 147.977 82.915 143.685 82.915 143.685L81.1983 106.777L82.0567 92.8716L77.9367 90.4683Z" fill="#FEBA00"/>
<Path id="Vector_3" d="M103.687 198.447H87.0349C87.0349 198.447 81.3699 139.908 81.3699 138.707C82.3999 139.737 82.2282 140.08 86.5199 141.282C89.0949 144.028 107.292 189.692 107.292 189.692L103.687 198.447Z" fill="#4B565D"/>
<Path id="Vector_4" d="M95.4142 68.6666C103.436 70.9618 97.1017 95.4655 94.1318 97.5186C91.162 99.5717 77.2398 93.7934 76.1171 91.1944C74.9944 88.5954 84.0567 65.417 95.4142 68.6666Z" fill="#A1B9C8"/>
<Path id="Vector_5" d="M102.657 62.1432C128.235 62.1432 128.75 135.617 125.145 138.707C121.54 141.797 84.632 144.715 81.3704 138.707C78.1087 132.698 74.847 62.1432 102.657 62.1432Z" fill="#B9CDD9"/>
<Path id="Vector_6" d="M111.927 67.1216C118.622 62.1433 134.243 82.0566 134.072 85.6616C133.9 89.2666 120.853 96.82 118.107 96.1333C115.36 95.4466 102.447 74.1703 111.927 67.1216Z" fill="#A1B9C8"/>
<Path id="Vector_7" d="M131.668 86.3483C138.02 96.8199 139.737 110.725 139.737 113.128C139.737 119.652 136.475 122.913 134.415 122.913C126.175 122.913 99.0518 101.97 97.1635 100.253C95.2751 98.5366 100.768 93.3866 101.627 94.2449C102.485 95.1033 112.27 101.283 126.518 107.463C124.458 104.888 118.45 97.1633 118.278 94.7599C118.107 92.3566 131.668 86.3483 131.668 86.3483Z" fill="#FEBA00"/>
<Path id="Vector_8" d="M93.4684 81.3349L82.7439 82.953L85.5176 101.336L96.2421 99.7183L93.4684 81.3349Z" fill="#333333"/>
<Path id="Vector_9" d="M101.28 98.1504C102.56 95.9335 101.101 92.6953 98.022 90.9176C94.943 89.14 91.4094 89.496 90.1295 91.7129C88.8496 93.9298 90.308 97.168 93.3871 98.9457C96.4661 100.723 99.9997 100.367 101.28 98.1504Z" fill="#FEBA00"/>
<Path id="Vector_10" d="M107.12 65.4049C107.12 67.6366 98.1936 67.8083 98.1936 65.4049V51.8433H107.12V65.4049Z" fill="#D37C59"/>
<Path id="Vector_11" d="M100.339 59.9116C105.222 59.9116 109.18 52.8791 109.18 44.2041C109.18 35.5291 105.222 28.4966 100.339 28.4966C95.4562 28.4966 91.498 35.5291 91.498 44.2041C91.498 52.8791 95.4562 59.9116 100.339 59.9116Z" fill="#FEBA00"/>
<Path id="Vector_12" d="M108.579 48.7533C109.859 48.7533 110.896 47.7157 110.896 46.4358C110.896 45.1559 109.859 44.1183 108.579 44.1183C107.299 44.1183 106.261 45.1559 106.261 46.4358C106.261 47.7157 107.299 48.7533 108.579 48.7533Z" fill="#FEBA00"/>
<Path id="Vector_13" d="M138.706 26.2649C132.011 26.2649 126.518 31.0716 119.308 31.0716C114.158 31.0716 109.18 24.8916 101.97 24.8916C92.6998 24.8916 89.7815 29.8699 89.7815 33.3033C89.7815 36.0499 91.4982 39.1399 92.0132 39.1399C92.0132 38.2816 93.0432 35.1916 93.3865 34.8483C93.7298 36.0499 100.94 44.4616 107.291 44.4616V44.5097C107.64 44.2762 108.046 44.1419 108.465 44.1211C108.885 44.1003 109.302 44.1938 109.672 44.3916C110.042 44.5893 110.352 44.884 110.568 45.244C110.784 45.6041 110.898 46.016 110.898 46.4358C110.898 46.8556 110.784 47.2675 110.568 47.6275C110.352 47.9876 110.042 48.2822 109.672 48.48C109.302 48.6777 108.885 48.7712 108.465 48.7504C108.046 48.7296 107.64 48.5953 107.291 48.3619V53.3883H109.008C111.24 53.3883 112.27 52.5299 115.703 52.5299C121.711 52.5299 130.123 59.9116 140.423 59.9116C151.582 59.9116 156.216 51.4999 156.216 42.0583C156.216 29.5266 144.371 26.2649 138.706 26.2649Z" fill="black"/>
<Path id="Vector_14" d="M125.145 138.707V198.447H103.687L86.4998 141.242C92.5287 142.312 115.36 143.17 125.145 138.707Z" fill="#626F77"/>
</G>
</G>
</Svg>
<View>
<Text style={{color: '#3849F6',
fontSize: 20,
fontWeight: 600,
top:-65,}}> Langsung Di HPmu</Text>
</View>      
<View>
<Text style={{
  color: '#3849F6',
  fontSize: 18,
  fontWeight: 500,
  top: -50,
  textAlign: 'center',
  maxWidth: '80%',  
  marginLeft: 'auto',  
  marginRight: 'auto',  
}}>
   Dengan sekali klik, kamu bisa mendapatkan pilihan laundry terdekat, terbaik, dan terjangkau.
</Text>

<TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>MULAI SEKARANG</Text>
      </TouchableOpacity>
</View>

      </View>
    ),
  ];

  const [activePage, setActivePage] = useState(0);

  const scrollX = new Animated.Value(0);

  // Menghitung posisi elips berdasarkan halaman aktif
  const elipsPosition = Animated.divide(scrollX, pageWidth);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <ScrollView
        horizontal
        pagingEnabled
        style={styles.container}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      >
        {pages.map((pageContent) => (
          <View key={pageContent.key} style={[styles.page, { width: pageWidth }]}>
            {pageContent}
          </View>
        ))}
      </ScrollView>

      {/* Penanda elips */}
      <View style={styles.elipsContainer}>
        {pages.map((_, index) => {
          const elipsStyle = {
            opacity: elipsPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp',
            }),
          };
          return (
            <Animated.View key={index} style={[styles.elips, elipsStyle]} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elipsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: -45,
  },
  elips: {
    top:'-40%',
    width: 10,
    height: 10,
    borderRadius: 5,  
    backgroundColor: 'blue',  
    margin: 5,
  },
  button: {
    top:170,
    backgroundColor: '#3849F6',
    padding: 10,
    borderRadius: 5,
    alignItems:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems:'center',
  },
});
