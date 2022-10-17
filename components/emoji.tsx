type EmojiProps = {
    label?: string;
    symbol: string;
};

const Emoji = ({ label, symbol }: EmojiProps) => (
    <span
        data-testid="emoji"
        className="emoji"
        role="img"
        aria-label={label}
        aria-hidden={false}
    >
        {symbol}
    </span>
);

export default Emoji;