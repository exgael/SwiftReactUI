import React, { ReactNode, CSSProperties, ForwardedRef, useContext, useEffect, useState } from 'react';

export const Spacer = ({ flex = 1 }) => <div style={{ flex }} />;

const AlignmentContext = React.createContext(null);

function useIsSmallScreen() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isSmallScreen;
}

enum VerticalAlignment {
    Top = 'flex-start',
    Center = 'center',
    Bottom = 'flex-end',
    Fill = 'stretch'
}

enum HorizontalDistribution {
    Leading = 'flex-start',
    Center = 'center',
    Trailing = 'flex-end',
    SpaceBetween = 'space-between',
    SpaceAround = 'space-around',
    SpaceEvenly = 'space-evenly'
}

interface HStackProps {
    children?: ReactNode;
    verticalAlignment?: keyof typeof VerticalAlignment;
    distribution?: keyof typeof HorizontalDistribution;
    spacing?: number;
    style?: CSSProperties;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onTouchStart?: () => void;
    onTouchEnd?: () => void;
    ariaLabel?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    boxShadow?: string;
    backgroundColor?: string;
}

const HStack: React.FC<HStackProps> = React.forwardRef((
    {
        children,
        verticalAlignment = 'Center',
        distribution = 'Center',
        spacing = 10,
        style = {},
        onClick,
        onMouseEnter,
        onMouseLeave,
        onTouchStart,
        onTouchEnd,
        ariaLabel,
        borderColor,
        borderWidth,
        borderRadius,
        boxShadow,
        backgroundColor
    }: HStackProps,
    ref: ForwardedRef<HTMLDivElement>
) => {
    const alignItems = VerticalAlignment[verticalAlignment];
    const justifyContent = HorizontalDistribution[distribution];

    const isSmallScreen = useIsSmallScreen();
    const responsiveGap = isSmallScreen ? `${spacing / 2}px` : `${spacing}px`;

    const childrenWithAlignment = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            if (child.type === Spacer) {
                return React.cloneElement<any>(child, {style: {flex: 1}});
            }
            const alignment = useContext(AlignmentContext);
            if (alignment) {
                return React.cloneElement<any>(child, {style: {alignSelf: alignment}});
            }
        }
        return child;
    });

    return (
        <div
            ref={ref}
            style={{
                ...style,
                gap: responsiveGap,
                display: 'flex',
                flexDirection: 'row',  // This is the main difference
                justifyContent: justifyContent,
                alignItems: alignItems,
                transition: 'all 0.3s ease',
                borderColor: borderColor,
                borderWidth: borderWidth,
                borderRadius: borderRadius,
                boxShadow: boxShadow,
                backgroundColor: backgroundColor
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-label={ariaLabel}
            role="group"
        >
            {childrenWithAlignment}
        </div>
    );
});

export default React.memo(HStack);
