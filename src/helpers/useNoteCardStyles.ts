import { createStyles } from "@mantine/core";

const useNoteCardStyles = createStyles((theme) => ({
  noteCard: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(0, theme.colors.yellow[6]),
    },
  },
}));

export default useNoteCardStyles;
