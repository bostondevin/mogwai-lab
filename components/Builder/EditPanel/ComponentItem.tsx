import { useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import styled from 'styled-components';

export type ComponentItemmProps = {
    label: string;
    icon: string;
    children?: JSX.Element | null | undefined
    element: JSX.Element;
};

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) => props.move && `cursor: move;`}
`;

export const ComponentItem = (props: any) => {

    const {
        enabled,
        connectors: { create },
    } = useEditor((state) => ({
        enabled: state.options.enabled,
    }));

    return (
        <div
            ref={(ref) =>
                create(
                    ref,
                    props.element
                )
            }
        >
            <Tooltip title={props.label} placement="right">
                <Item className="m-2 pb-2 cursor-pointer block" move>
                    {props.label}
                </Item>
            </Tooltip>
        </div>
    );
};
