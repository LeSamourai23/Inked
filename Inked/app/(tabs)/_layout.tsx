import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Image } from 'react-native';
import Colors from '../../constants/Colors';
import tweets from '../../assets/data/tweets';

const tweet = tweets[0];

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 30,
          opacity: 1,
          borderTopWidth: 0,
          marginBottom: 25,
          marginLeft: 10,
          marginRight: 10,
          paddingTop: 25,
          paddingBottom: 15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors[colorScheme ?? 'light'].secondary,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 20 },
          shadowRadius: 30,
          shadowOpacity: 1,
          
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="albums-outline" color={color}/>,
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    src={tweet.user.image}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      marginRight: 10,
                      opacity: pressed ? 0.5 : 1
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerShadowVisible: false,
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    src={'https://i.ibb.co/QmK6sK5/Inked-Logo-Header-1.png'}
                    style={{
                      width: 100,
                      height: 100,
                      marginLeft: 5,
                      opacity: pressed ? 0.5 : 1
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="search-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="compose"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="add-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="trending-up-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-journal"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="journal-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
