import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = { title: 'Organisms/Toast', component: Toast };
export default meta;
type S = StoryObj<typeof Toast>;
export const Default: S = { args: { message: 'Saved' } };
export const Error: S = { args: { tone: 'error', message: 'Could not save' } };
