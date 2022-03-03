import { Container, makeStyles, Paper, Tab, Tabs, TextField, Button, Select } from "@material-ui/core"
import { TabPanel } from "@material-ui/lab"
import { useState } from "react"

const useStyles = makeStyles(theme => ({
    adminContainer: {
        background: '#FFFFFF',
        marginTop: '1em',
        height: 'calc(100vh - 185px)',
        borderRadius: 10,
        flexGrow: 1,
        display: 'flex',
        padding: 0,
    },
    tab: {
        height: '100%',
        width: '100%',
        borderRadius: '0px 10px 10px 0px',
        boxSizing: 'border-box',
        padding: '1em'
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        marginRight: '3em',
        '& > h3': {
            fontSize: 'xx-large',
            marginRight: '1em'
        }
    },
    field: {
        width: '60%'
    },
    paper: {
        height: 120,
        padding: '1em',
        marginBottom: '1em',
        position: 'relative',
    }
}))

const Management = () => {
    const classes = useStyles()
    const [value, setValue] = useState('product')
    const [newCategory, setNewCategory] = useState('')

    const handleChange = (event, value) => {
        setValue(value)
    }
    
    return (
        <Container className={classes.adminContainer}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Product" onClick={() => setValue('product')}></Tab>
                <Tab label="Category" onClick={() => setValue('category')}></Tab>
            </Tabs>
            <div
                role="tabpanel"
                hidden={value !== 'product'}
                className={classes.tab}
            >
                {value === 'product' && (
                    <Container>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <h3>Add new category</h3>
                                <TextField
                                    className={classes.field}
                                    value={newCategory}
                                    onChange={e => setNewCategory(e.target.value)}
                                />
                                <Button className={classes.btn} color="primary" variant="contained" >Save</Button>
                            </form>
                        </Paper>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <h3>Edit category</h3>
                                <Select>

                                </Select>
                                <TextField
                                    className={classes.field}
                                    value={newCategory}
                                    onChange={e => setNewCategory(e.target.value)}
                                />
                                <Button className={classes.btn} color="primary" variant="contained" >Save</Button>
                            </form>
                        </Paper>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <h3>Delete category</h3>
                                <Select>
                                    
                                </Select>
                            <Button className={classes.btn} color="primary" variant="contained" >Save</Button>
                            </form>
                        </Paper>
                    </Container>
                )}
            </div>
            <div
                role="tabpanel"
                hidden={value !== 'category'}
                className={classes.tab}
            >
                {value === 'category' && (
                    <Container>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <h3>Add new category</h3>
                                <TextField
                                    className={classes.field}
                                    value={newCategory}
                                    onChange={e => setNewCategory(e.target.value)}
                                />
                                <Button className={classes.btn} color="primary" variant="contained" >Save</Button>
                            </form>
                        </Paper>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <h3>Edit category</h3>
                                <Select>

                                </Select>
                                <TextField
                                    className={classes.field}
                                    value={newCategory}
                                    onChange={e => setNewCategory(e.target.value)}
                                />
                                <Button className={classes.btn} color="primary" variant="contained" >Save</Button>
                            </form>
                        </Paper>
                        <Paper className={classes.paper}>
                            <form className={classes.form}>
                                <h3>Delete category</h3>
                                <Select>
                                    
                                </Select>
                            <Button className={classes.btn} color="primary" variant="contained" >Save</Button>
                            </form>
                        </Paper>
                    </Container>
                )}
            </div>
        </Container>
    )
}

export default Management