import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultActionBar } from 'rn-core-component';

export default function App() {
  const [h, setH] = useState(0);
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <DefaultActionBar
          scroll={scrollY}
          title="Điện nước"
          onLayout={(event) => {
            setH(event.nativeEvent.layout.height);
          }}
        />
        <Animated.ScrollView
          style={styles.scroll}
          onScroll={scrollHandler}
          contentContainerStyle={{ paddingTop: h }}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            facere voluptates ut esse unde hic ipsum tempora accusamus,
            asperiores voluptas ratione perspiciatis dolorum natus similique ab
            at, laudantium blanditiis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex et facere voluptates ut esse unde hic ipsum
            tempora accusamus, asperiores voluptas ratione perspiciatis dolorum
            natus similique ab at, laudantium blanditiis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex et facere voluptates ut esse
            unde hic ipsum tempora accusamus, asperiores voluptas ratione
            perspiciatis dolorum natus similique ab at, laudantium blanditiis.
          </Text>
        </Animated.ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    flex: 1,
  },
});
