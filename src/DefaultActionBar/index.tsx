import {
  StyleSheet,
  View,
  TouchableOpacity,
  type LayoutChangeEvent,
  type ViewProps,
  type ViewStyle,
  type TextStyle,
  type TextProps,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

export type DefaultActionBarProps = {
  withMargin?: number;
  type?: 'position' | 'fixed';
  bgColor?: string;
  bgColorScroll?: string;
  color?: string;
  colorScroll?: string;
  contentStyle?: ViewStyle;
  rootProps?: Omit<ViewProps, 'style' | 'onLayout'>;
  onLayout?: (event: LayoutChangeEvent) => void;
  title?: string;
  titleStyle?: TextStyle;
  titleProps?: Omit<TextProps, 'style'>;
  showBackBtn?: boolean;
  backBtnOnPress?: () => void;
  dotOnPress?: () => void;
  closeOnPress?: () => void;
  scroll: SharedValue<number>;
};
export type DefaultActionBarRef = {
  getHeight: () => number;
};

const IconAnimated = Animated.createAnimatedComponent(Icon);
const DefaultActionBar = React.forwardRef<
  DefaultActionBarRef,
  DefaultActionBarProps
>((props, ref) => {
  const {
    rootProps,
    onLayout,
    withMargin = 10,
    type = 'position',
    bgColor = '#FFFFFFEE',
    bgColorScroll = '#0069F6',
    color = '#000000',
    colorScroll = '#FFFFFF',
    title,
    showBackBtn = true,
    backBtnOnPress,
    dotOnPress,
    closeOnPress,
    scroll,
  } = props;
  const [h, setH] = React.useState(1);
  const { top } = useSafeAreaInsets();
  const bgStyled = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scroll.value,
        [0, 0.1, h * 0.75, h],
        [bgColor, bgColor, bgColorScroll, bgColorScroll]
      ),
    };
  }, [scroll]);
  const clStyled = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scroll.value,
        [0, 0.1, h * 0.75, h],
        [color, color, colorScroll, colorScroll]
      ),
    };
  }, [scroll]);
  const dividerStyled = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scroll.value,
        [0, 0.1, h * 0.75, h],
        [color, color, colorScroll, colorScroll]
      ),
    };
  }, [scroll]);
  React.useImperativeHandle(
    ref,
    () => ({
      getHeight: () => (type === 'position' ? h : 0),
    }),
    [h, type]
  );
  return (
    <Animated.View
      style={[
        styles.root,
        { paddingTop: Math.max(top, withMargin) },
        bgStyled,
        type === 'position' && styles.position,
      ]}
      onLayout={(event) => {
        setH(event?.nativeEvent.layout.height);
        onLayout?.(event);
      }}
      {...rootProps}
    >
      <View style={[styles.contentStyle]}>
        {showBackBtn && (
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginRight: 10 }}
            onPress={backBtnOnPress}
          >
            <IconAnimated name="arrow-left" size={24} style={clStyled} />
          </TouchableOpacity>
        )}

        <Animated.Text numberOfLines={1} style={[styles.titleStyle, clStyled]}>
          {title}
        </Animated.Text>
        <View style={styles.right_container}>
          <TouchableOpacity onPress={dotOnPress}>
            <IconAnimated name="dots-horizontal" size={24} style={clStyled} />
          </TouchableOpacity>
          <Animated.View style={[styles.divider, dividerStyled]} />
          <TouchableOpacity onPress={closeOnPress}>
            <IconAnimated name="close" size={24} style={clStyled} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
});

export default React.memo(DefaultActionBar);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
  },
  position: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  contentStyle: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  right_container: {
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#EAEBED33',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  divider: {
    width: 1,
    marginHorizontal: 5,
  },
});
