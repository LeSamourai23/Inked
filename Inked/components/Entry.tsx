import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { TweetType } from '../types';
import { Entypo } from '@expo/vector-icons';
import IconButton from './IconButton';
import { Link } from 'expo-router';

type TweetProps = {
    tweet: TweetType;
};

const Entry = ({ tweet }: TweetProps) => {
    return (
        <Link href={`/feed/tweet/${tweet.id}`} asChild>
            <Pressable style={styles.container}>

                <View style={styles.mainContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image src={tweet.user.image} style={styles.userImage} />
                        <View>
                            <Text style={styles.name}>{tweet.user.username}</Text>
                            <Text style={styles.time}>2 hours ago</Text>
                        </View>
                        <Entypo
                            name="dots-three-horizontal"
                            size={16}
                            color="gray"
                            style={{ marginLeft: 'auto' }}
                        />
                    </View>

                    <Text style={styles.content}>{tweet.content}</Text>

                    {tweet.image && <Image src={tweet.image} style={styles.image} />}

                    <View style={styles.footer}>
                        <IconButton icon="heart-outline" text={tweet.numberOfComments} />
                        <IconButton icon="bookmark-outline" text={tweet.numberOfRetweets} />
                        <IconButton icon="chatbox-ellipses-outline" text={tweet.numberOfLikes} />
                        <IconButton icon="share-social-outline" />
                    </View>
                </View>
            </Pressable>
        </Link>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 15,
        backgroundColor: '#171b1e',
        width: '95%',
        alignSelf: 'center',
        margin: 5,
        borderRadius: 20,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 15
    },
    mainContainer: {
        flex: 1,
    },
    name: {
        fontWeight: '600',
        color: 'white',
        marginBottom: 5
    },
    time: {
        color: 'white',
        opacity: 0.7
    },
    content: {
        lineHeight: 20,
        marginTop: 5,
        color: 'white'
    },
    image: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 10,
        borderRadius: 15,
    },

    // footer
    footer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
    },
});

export default Entry;