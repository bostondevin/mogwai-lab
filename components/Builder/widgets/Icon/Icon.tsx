export type IconProps = {
    classNames: string;
};

export const Icon = (props: Partial<IconProps>) => {
    return (
        <i className={props.classNames}></i>
    );

};

