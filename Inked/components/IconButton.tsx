import { View, Text } from 'react-native';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  icon: React.ComponentProps<typeof Ionicons>['name'];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons name={icon} size={18} color="gray" />
      <Text style={{ fontSize: 12, color: 'gray' }}>{text}</Text>
    </View>
  );
};

export default IconButton;