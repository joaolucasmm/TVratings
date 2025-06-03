import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function Content({ content, setContent }) {

    const handleContent = (event, newContent) => {
        if(newContent){
            setContent(newContent);
        }
    };

    return (
        <>
            <ToggleButtonGroup
                value={content}
                exclusive
                onChange={handleContent}
                aria-label="table content"
            >
                <ToggleButton value="shows" aria-label="Shows">
                    Shows
                </ToggleButton>
                <ToggleButton value="movies" aria-label="Movies">
                    Movies
                </ToggleButton>
                <ToggleButton value="series" aria-label="Series">
                    Series
                </ToggleButton>
                <ToggleButton value="animes" aria-label="Anime">
                    Animes
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default Content;
