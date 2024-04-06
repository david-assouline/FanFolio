import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
	colors: {
		gray: {
			700: '#1f2733'
		},
		blue: {
			100: '#0f2c52'
		}
	},
	styles: {
		global: (props) => ({
			body: {
				bg: mode('gray.50', 'gray.800')(props),
				fontFamily: "'Roboto', sans-serif"
			},
			html: {
				fontFamily: "'Roboto', sans-serif"
			}
		})
	}
};
